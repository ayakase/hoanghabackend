const express = require('express');
const router = express.Router();
const Tour = require('../../models/TourModel')
const Category = require('../../models/CategoryModel')
router.get('/:slug', (req, res) => {
    console.log(req.params.slug)
    Tour.findAll({
        where: { slug: req.params.slug },
        // include: {
        //     model: Category
        // }
    }).then((result) => {
        res.send(result)
    }).catch((error) => {
        console.error(error);
    })
})

module.exports = router;
