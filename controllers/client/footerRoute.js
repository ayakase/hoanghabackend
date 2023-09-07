const express = require('express');
const router = express.Router();
const FooterForm = require('../../models/FooterFormModel');
router.post('/', (req, res) => {
    FooterForm.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        note: req.body.note
    })
        .then(() => {
            res.json("done");
        }).catch((err) => {
            console.error(err)
        })

});
module.exports = router;
