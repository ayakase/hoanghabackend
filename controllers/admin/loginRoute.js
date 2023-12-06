const express = require('express');
const router = express.Router();
const User = require('../../models/UserModel');
const bcrypt = require('bcrypt');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.password);
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
module.exports = router;
