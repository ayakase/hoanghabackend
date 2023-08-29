const express = require('express');
const router = express.Router();
const Tour = require('../../models/TourModel')
router.post('/', (req, res) => {
    console.log(req.body);
    Tour.create({
        title: req.body.tourTitle,
        schedule: req.body.tourSchedule,
        tourcategory: req.body.tourCategory,
        tourtype: req.body.tourType,
        departure: req.body.tourFrom,
        days: req.body.tourLength,
        ishottour: req.body.isHot,
        transportation: req.body.tourTransport,
        adultprice: req.body.adultPrice,
        youngprice: req.body.youngPrice,
        childprice: req.body.childPrice,
        special: req.body.tourSpecial,
        bonus: req.body.tourBonus,
        visa: req.body.tourVisa,
        detail: req.body.tourDetail,
        priceservice: req.body.tourPriceService,
        guide: req.body.tourGuide,
    })
        .then(() => {
            res.json("done");
        }).catch((err) => {
            console.error(err)
        })

});
module.exports = router;
