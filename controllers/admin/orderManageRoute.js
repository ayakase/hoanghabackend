const express = require('express');
const router = express.Router();
const Order = require('../../models/OrderModel');
const Tour = require('../../models/TourModel')
// const multer = require('multer');
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/:order/:page', (req, res) => {
    console.log(req.params);
    Order.findAndCountAll({
        order: [["createdAt", req.params.order]],
        limit: 10,
        include: {
            model: Tour,
        },
        offset: (req.params.page - 1) * 10
    }).then((result) => {
        const { count, rows } = result;
        res.send(result)
    }).catch((error) => {
        console.error(error);
    })
})
module.exports = router;
