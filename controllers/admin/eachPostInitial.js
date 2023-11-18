const express = require('express');
const router = express.Router();
const Post = require('../../models/PostModel');
router.get('/:slug', (req, res) => {
    console.log(req.params.slug)
    Post.findOne({
        where: {
            slug: req.params.slug,
        },
    }).then((result) => {
        res.send(result);
    });
})
module.exports = router;
