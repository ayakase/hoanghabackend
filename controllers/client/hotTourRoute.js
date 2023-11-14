const express = require('express');
const router = express.Router();
const Tour = require('../../models/TourModel')
const Category = require('../../models/CategoryModel')
const Location = require('../../models/LocationModel')
const Region = require('../../models/RegionModel')
router.get('/:orderby/:order/:page', (req, res) => {
    // console.log(req.params.category);
    Tour.findAndCountAll({
        where: { ishottour: 1 },
        include: {
            model: Location,
            required: true,
            include: {
                model: Region,
                required: true,
                include: {
                    model: Category,
                    required: true
                }
            }
        },
        order: [[req.params.orderby, req.params.order]],
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
