const express = require('express');
const router = express.Router();
const cloudinary = require('../../cloudiraryConfig');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Specify the destination folder
        cb(null, 'thumbnails/');
    },
    filename: function (req, file, cb) {
        // Use the original filename as the saved filename
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });
const Tour = require('../../models/TourModel')
router.post('/', upload.single('tourThumbnail'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    // cloudinary.uploader.upload(req.file, (error, result) => {
    //     if (error) {
    //         console.error(error);
    //     } else {
    //         console.log(result.secure_url); // This is the URL for the uploaded image
    //     }
    // });
    // Tour.create({
    //     title: req.body.tourTitle,
    //     schedule: req.body.tourSchedule,
    //     tourcategory: req.body.tourCategory,
    //     tourtype: req.body.tourType,
    //     departure: req.body.tourFrom,
    //     days: req.body.tourLength,
    //     ishottour: req.body.isHot,
    //     transportation: req.body.tourTransport,
    //     adultprice: req.body.adultPrice,
    //     youngprice: req.body.youngPrice,
    //     childprice: req.body.childPrice,
    //     special: req.body.tourSpecial,
    //     bonus: req.body.tourBonus,
    //     visa: req.body.tourVisa,
    //     detail: req.body.tourDetail,
    //     priceservice: req.body.tourPriceService,
    //     guide: req.body.tourGuide,
    // })
    //     .then(() => {
    //         res.json("done");
    //     }).catch((err) => {
    //         console.error(err)
    //     })

});

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
