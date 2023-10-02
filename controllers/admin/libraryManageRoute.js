const express = require('express');
const router = express.Router();
const cloudinary = require('../../cloudiraryConfig');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: async (req, file) => 'images-collection',
        allowed_formats: async (req, file) => ['jpg', 'jpeg', 'png', 'gif', 'webp'],
        transformation: [{ width: 1500 }],
    },
});
const upload = multer({ storage: storage });
router.post('/',  upload.array('images',10),(req, res) => {
    console.log(req.files)
    res.send("success")
});
router.get('/', async (req, res) => {
    try {
        const folderName = 'images-collection';
        const perPage = 20;
        const result = await cloudinary.search
            .expression(`folder:${folderName}`)
            .sort_by('created_at', 'desc')
            .max_results(perPage)
            .execute();
        res.send(result);
    } catch (err) {
        console.error(err);
    }

})
router.get('/:cursor', async (req, res) => {
    try {
        const folderName = 'images-collection';
        const perPage = 20;
        const result = await cloudinary.search
            .expression(`folder:${folderName}`)
            .sort_by('created_at', 'desc')
            .max_results(perPage)
            .next_cursor(req.params.cursor)
            .execute();
        console.log(result);
        res.send(result);
    } catch (err) {
        console.error(err);
    }

})
module.exports = router;
