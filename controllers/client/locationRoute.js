const express = require('express');
const router = express.Router();
const Tour = require('../../models/TourModel')
const Category = require('../../models/CategoryModel');
const Region = require('../../models/RegionModel');
const Location = require('../../models/LocationModel');
router.get('/:location/:orderby/:order/:page', (req, res) => {
    Tour.findAndCountAll({
        include: {
            model: Location,
            required: true,
            where: {
                slug: req.params.location,
            },
        },
        order: [[req.params.orderby, req.params.order]],
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
router.get('/side-bar-list/:region', (req, res) => {
    Region.findOne({
        where: {
            slug: req.params.region
        },
        include: {
            model: Location,
            include: {
                model: Tour
            }
        }
    }).then((results) => {
        console.log(results)
        res.send(results)
    })
})
router.get('/hot-sidebar', (req, res) => {
    Tour.findAndCountAll({
        where: {
            ishottour: 1
        },
        order: [['createdAt', 'DESC']],
        limit: 6,
    }).then((result) => {
        const { count, rows } = result;
        res.send(result)
    }).catch((error) => {
        console.error(error);
    })
})
module.exports = router;
