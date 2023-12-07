const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.cookies.token
    if (!token) {
        res.send("no no no")
    } else {
        jwt.verify(token, 'secret', (err, decoded) => {
            if (err) {
                res.send("no no no");
            } else {
                if (decoded.id == 1) {
                    console.log(decoded)
                    next();
                }
            }
        });
    }

}
module.exports = auth