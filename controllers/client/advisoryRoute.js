const express = require('express');
const router = express.Router();
const Advisory = require('../../models/AdvisoryModel');
const Notification = require('../../models/NotificationModel');
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
        note: req.body.note,
        tour_id: req.body.tour_id
    })
        .then(() => {
            res.json("done");
            let actionMessage = `Khách hàng <span style="color: rgb(255, 98, 0);font-weight: bold;">${req.body.name} </span> đã yêu cầu tư vấn`;

            if (req.body.tour_title) {
                actionMessage += ` tour <span style="color: rgb(255, 98, 0);font-weight: bold;">${req.body.tour_title} </span>`;
            }

            Notification.create({
                action: actionMessage
            });


        }).catch((err) => {
            console.error(err)
        })
    console.log(req.body.name)
});
module.exports = router;
