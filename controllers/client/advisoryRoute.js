const express = require('express');
const router = express.Router();
const Advisory = require('../../models/AdvisoryModel');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', upload.none(), (req, res) => {
    Advisory.create({
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
    console.log(req.body.name)
});
module.exports = router;
