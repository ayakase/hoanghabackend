const express = require('express');
const router = express.Router();
const Tour = require('../../models/TourModel')
const Category = require('../../models/CategoryModel')
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    Tour.findAll({
        where: { id: req.params.id },
        include: {
            model: Category
        }
    }).then((result) => {
        res.send(result)
    }).catch((error) => {
        console.error(error);
    })
})

module.exports = router;
