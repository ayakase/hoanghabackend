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
        transformation: [{ width: 500, height: 500 }],
    },
});
const upload = multer({ storage: storage });
// router.post('/', upload.single('tourThumbnail'), (req, res) => {
//     console.log(req.file.path);
// });
router.get('/:page', async (req, res) => {
    try {
        const folderName = 'images-collection';
        const page = parseInt(req.params.page);
        const perPage = 10;
        const result = await cloudinary.search
            .expression(`folder:${folderName}`)
            .sort_by('created_at', 'desc')
            .max_results(perPage)
            // .next_cursor(page)
            .execute();
        console.log(result);
        res.send(result);
    } catch (err) {
        console.error(err);
    }

})

module.exports = router;
