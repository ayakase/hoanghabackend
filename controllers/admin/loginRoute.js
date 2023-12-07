const express = require('express');
const router = express.Router();
const User = require('../../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/info', (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.send("Hãy điền thông tin")
    } else {
        try {
            User.findOne({ where: { username: req.body.username, } }).then(async (result) => {
                if (!result) {
                    res.send("Username không tồn tại")
                } else {
                    const passwordMatch = await bcrypt.compare(req.body.password, result.password);
                    if (passwordMatch) {
                        const token = jwt.sign({ id: result.id }, 'secret', { expiresIn: '1h' })
                        console.log(token)
                        res.cookie('token', token, {
                            httpOnly: true, // Cookie accessible only by the server
                            maxAge: 3600000, // Cookie expiration time in milliseconds (1 hour)
                            secure: true // Enable for HTTPS connections
                            // You might need to adjust other options based on your needs (e.g., domain, path, etc.)
                        });
                        res.send("Login thành công")

                    } else {
                        res.send("Sai mật khẩu")
                    }
                }
            }).catch((err) => {
                console.log(err)
            })
        }
        catch (e) {
            console.log("Error")
        }
    }
});
router.post('/state', (req, res) => {
    console.log(req.cookies)
    const token = req.cookies.token
    if (!token) {
        res.send(false)
    } else {
        jwt.verify(token, 'secret', (err, decoded) => {
            if (err) {
                console.log(err)
                res.send(false);
            } else {
                if (decoded.id == 1) {
                    console.log(decoded)
                    res.send(true)
                }
            }
        });
    }
})
module.exports = router;
