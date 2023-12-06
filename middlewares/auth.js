
function auth(req, res, next) {
    console.log(req.cookies)
    next()
    // if (req.cookies.log == 'true') {
    //     next()
    // } else {
    //     res.send("no no no")
    // }
}
module.exports = auth