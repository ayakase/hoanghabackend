const express = require('express');
const router = express.Router();
const Tour = require('../../models/TourModel')
const Category = require('../../models/CategoryModel');
const Region = require('../../models/RegionModel');
const Location = require('../../models/LocationModel');
router.get('/:category/:orderby/:order/:page', (req, res) => {
    Tour.findAndCountAll({
        include: {
            model: Location,
            include: {
                model: Region,
                include: {
                    model: Category,
                    where: {
                        id: req.params.category
                    }
                }
            }
        },
        order: [[req.params.orderby, req.params.order]],
        limit: 10,
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
    console.log(req.params.category)
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
        console.log(results)
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
