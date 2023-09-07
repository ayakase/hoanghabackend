const express = require('express');
const router = express.Router();
const Tour = require('../../models/TourModel')
// router.post('/', (req, res) => {
//     console.log(req.body);
//     Tour.create({
//         title: req.body.tourTitle,
//         schedule: req.body.tourSchedule,
//         tourcategory: req.body.tourCategory,
//         tourtype: req.body.tourType,
//         departure: req.body.tourFrom,
//         days: req.body.tourLength,
//         ishottour: req.body.isHot,
//         transportation: req.body.tourTransport,
//         adultprice: req.body.adultPrice,
//         youngprice: req.body.youngPrice,
//         childprice: req.body.childPrice,
//         special: req.body.tourSpecial,
//         bonus: req.body.tourBonus,
//         visa: req.body.tourVisa,
//         detail: req.body.tourDetail,
//         priceservice: req.body.tourPriceService,
//         guide: req.body.tourGuide,
//     })
//         .then(() => {
//             res.json("done");
//         }).catch((err) => {
//             console.error(err)
//         })

// });
router.get('/:category/:order/:page', (req, res) => {
    console.log(req.params.category);
    Tour.findAndCountAll({
        where: { tourcategory: req.params.category },
        order: [["createdAt", req.params.order]],
        limit: 10,
        offset: (req.params.page - 1) * 10
    }).then((result) => {
        const { count, rows } = result;
        res.send(result)
    }).catch((error) => {
        console.error(error);
    })
})
router.delete('/:id', (req, res) => {
    Tour.destroy({ where: { id: req.params.id } })
        .then((result) => {
            console.log(result)
            res.send("done")
        }).catch((error) => {
            console.error(error);
        })
})
module.exports = router;
