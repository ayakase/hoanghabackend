const express = require('express');
const router = express.Router();
const cloudinary = require('../../cloudiraryConfig');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: async (req, file) => 'thumbnails_folder',
        allowed_formats: async (req, file) => ['jpg', 'jpeg', 'png', 'gif'],
        transformation: [{ width: 400, height: 400 }],
    },
});
const upload = multer({ storage: storage });
const Tour = require('../../models/TourModel')
const Category = require('../../models/CategoryModel')
router.get('/:category/:order/:page', (req, res) => {
    // const whereCondition = req.params.category !== '0' ? { category_id: req.params.category } : {};
    const whereCondition = {
        ishottour: 1 // New condition: isHotTour should be 1
    };
    if (req.params.category !== '0') {
        whereCondition.category_id = req.params.category;
    }
    Tour.findAndCountAll({
        where: whereCondition,
        include: {
            model: Category,
        },
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

module.exports = router;
