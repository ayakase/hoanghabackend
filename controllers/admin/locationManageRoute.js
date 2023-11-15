const express = require('express');
const router = express.Router();
const multer = require('multer');
const slugify = require('slugify')
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const Location = require('../../models/LocationModel')
const Region = require('../../models/RegionModel')
router.post('/', upload.none(), (req, res) => {
    if (!req.body.name || !req.body.slug) {
        res.send("Chua dien day du thong tin");
    } else {
        let slug = slugify(req.body.slug, {
            locale: 'vi',
            lower: true,
        })
        Location.create({
            name: req.body.name,
            slug: slug,
            note: req.body.note,
            region_id: req.body.region_id,
        }).then((response) => {
            res.send("Đã thêm địa điểm")
        }).catch((err) => {
            console.log(err);
            if (err.original.errno === 1062) {
                res.send("Slug bị trùng, vui lòng đổi")
            }
        });
    }
});
router.get('/locationlist', (req, res) => {
    console.log(req.query.region);
    const whereCondition = req.query.region !== '' ? { slug: req.query.region } : {};
    Location.findAll({
        include: {
            model: Region,
            where: whereCondition,
        },
        order: [["id", "ASC"]],

    }).then((result) => {
        res.send(result)
    }).catch((error) => {
        console.error(error);
    })
})
router.get('/region', (req, res) => {
    const whereCondition = req.params.category !== '0' ? { category_id: req.params.category } : {};
    Region.findAll({
        // where: whereCondition,
        order: [["id", "ASC"]],
    }).then((result) => {
        res.send(result)
    }).catch((error) => {
        console.error(error);
    })
})
router.delete('/:id', (req, res) => {
    Location.destroy({ where: { id: req.params.id } })
        .then((result) => {
            res.send("done")
        }).catch((error) => {
            console.error(error);
        })
})
module.exports = router;
