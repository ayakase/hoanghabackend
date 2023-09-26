const express = require('express');
const router = express.Router();
const Order = require('../../models/OrderModel');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', upload.none(), (req, res) => {
    console.log(req.body);
    Order.create({
        tour_id: req.body.tourId,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        note: req.body.note,
        adult: req.body.adult,
        teenager: req.body.teenager,
        children: req.body.children
    })
        .then(() => {
            res.json("done");
        }).catch((err) => {
            console.error(err)
        })
});
module.exports = router;
