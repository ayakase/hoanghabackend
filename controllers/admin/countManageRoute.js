const express = require("express");
const router = express.Router();

const Count = require("../../models/CountModel");
const Order = require("../../models/OrderModel");
const Tour = require("../../models/TourModel");
const Advisory = require("../../models/AdvisoryModel");
router.get("/view", (req, res) => {
    Count.findOne({
        where: { id: 1 }
    }).then((result) => {
        res.send(result);
    }).catch((err) => {
        console.error(err);
    });
});
router.get("/order", (req, res) => {
    Order.count().then((count) => {
        res.send(count.toString());
    }).catch((err) => {
        console.log(err)
    })
})
router.get("/tour", (req, res) => {
    Tour.count().then((count) => {
        res.send(count.toString());
    }).catch((err) => {
        console.log(err)
    })
})
router.get("/advise", (req, res) => {
    Advisory.count().then((count) => {
        res.send(count.toString());
    }).catch((err) => {
        console.log(err)
    })
})
module.exports = router;
