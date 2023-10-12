const express = require('express');
const router = express.Router();
const multer = require('multer');
const slugify = require('slugify')
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const Region = require('../../models/RegionModel')
const Category = require('../../models/CategoryModel')
router.post('/', upload.single('tourThumbnail'), (req, res) => {
    // console.log(req.file.path);
    // let slug = slugify(req.body.slug, {
    //     locale: 'vi',
    //     lower: true,
    // })
    // Tour.create({
    //     title: req.body.tourTitle,
    //     thumbnail: req.file.path,
    //     slug: slug,
    //     tik_tok_id: req.body.tiktokId,
    //     schedule: req.body.tourSchedule,
    //     category_id: req.body.tourCategory,
    //     tourtype: req.body.tourType,
    //     departure: req.body.tourFrom,
    //     days: req.body.tourLength,
    //     ishottour: req.body.isHot,
    //     recommend: req.body.recommend,
    //     transportation: req.body.tourTransport,
    //     adult_price: req.body.adultPrice,
    //     teenager_price: req.body.teenagerPrice,
    //     child_price: req.body.childPrice,
    //     infant_price: req.body.infantPrice,
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
    //         console.log(err);
    //     })

})
    ;
// const storage1 = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'thumbnails/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     },
// });

router.get('/:category', (req, res) => {
    const whereCondition = req.params.category !== '0' ? { category_id: req.params.category } : {};
    Region.findAll({
        where: whereCondition,
        include: {
            model: Category,
        },
        order: [["createdAt", "DESC"]],

    }).then((result) => {
        console.log(result);
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
