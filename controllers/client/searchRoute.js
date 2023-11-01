const express = require('express');
const router = express.Router();
const Tour = require('../../models/TourModel')
const Category = require('../../models/CategoryModel');
const Region = require('../../models/RegionModel');
const Location = require('../../models/LocationModel');
const { Op } = require('sequelize');
router.get('/:keyword/:orderby/:order/:page', (req, res) => {
    console.log(req.params)
    if (req.params.keyword !== undefined) {
        keyword = req.params.keyword
    } else {
        keyword = ' '
    }
    console.log(keyword)
    Tour.findAndCountAll({
        where: {
            title: {
                [Op.like]: `%${req.params.keyword}%`,
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
router.get('/side-bar-list/:category', (req, res) => {
    Category.findOne({
        where: {
            id: req.params.category
        },
        include: {
            model: Region,
            include: {
                model: Location,
                include: {
                    model: Tour
                }
            }
        }
    }).then((results) => {
        res.send(results)
    })
})
router.get('/hot-sidebar/:category', (req, res) => {
    // Tour.findAndCountAll({
    //     where: {
    //         category_id: req.params.category,
    //         ishottour: 1
    //     },
    //     order: [['createdAt', 'DESC']],
    //     limit: 6,
    // }).then((result) => {
    //     const { count, rows } = result;
    //     res.send(result)
    // }).catch((error) => {
    //     console.error(error);
    // })
})
module.exports = router;
