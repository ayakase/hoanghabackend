const express = require('express');
const router = express.Router();
const Post = require('../../models/PostModel')
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    Post.findAll({
        where: { id: req.params.id },
    }).then((result) => {
        res.send(result)
    }).catch((error) => {
        console.error(error);
    })
})

module.exports = router;
