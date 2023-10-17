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
const Location = require('../../models/LocationModel')
// router.post('/', upload.none(), (req, res) => {
//     console.log(req.body);
//     if (!req.body.name || !req.body.slug || !req.body.note) {
//         res.send("Chua dien day du thong tin");
//     } else {
//         let slug = slugify(req.body.slug, {
//             locale: 'vi',
//             lower: true,
//         })
//         console.log(slug);
//         Region.create({
//             name: req.body.name,
//             slug: slug,
//             note: req.body.note,
//             category_id: req.body.category_id,
//         }).then((response) => {
//             res.send("Da them")
//         }).catch((err) => {
//             console.log(err.original.errno);
//             if (err.original.errno === 1062) {
//                 res.send("Trung slug")
//             }
//         });
//     }
// });
router.get('/:category', (req, res) => {
    // const whereCondition = req.params.category !== '0' ? { category_id: req.params.category } : {};
    Location.findAll({
        // where: whereCondition,
        // include: {
        //     model: Category,
        // },
        order: [["id", "ASC"]],

    }).then((result) => {
        res.send(result)
        console.log(result)
    }).catch((error) => {
        console.error(error);
    })
})
router.delete('/:id', (req, res) => {
    Region.destroy({ where: { id: req.params.id } })
        .then((result) => {
            console.log(result)
            res.send("done")
        }).catch((error) => {
            console.error(error);
        })
})
module.exports = router;
