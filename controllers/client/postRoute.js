const express = require('express');
const router = express.Router();
const Post = require('../../models/PostModel')
router.get('/:category/:orderby/:order/:page', (req, res) => {
    Post.findAndCountAll({
        order: [["createdAt", "DESC"]],
        limit: 10,
        // separate: true,
        offset: (req.params.page - 1) * 10
    }).then((result) => {
        const { count, rows } = result;
        res.send(result)
    })
        .catch((error) => {
            console.error(error);
        })
})

module.exports = router;
