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
            required: true,
            include: {
                model: Region,
                required: true,
                include: {
                    model: Category,
                    where: {
                        id: req.params.category,
                    },
                    required: true
                }
            }
        },
        // order: [[req.params.orderby, req.params.order]],
        limit: 2,
        // separate: true,
        offset: (req.params.page - 1) * 2
    }).then((result) => {
        console.log(result.query)
        const { count, rows } = result;
        res.send(result)

        // const { count, rows } = result;

        // if (count > 0) {
        //     const tours = rows.flatMap((category) =>
        //         category.Regions.flatMap((region) =>
        //             region.Locations.flatMap((location) => location.Tours)
        //         )
        //     );

        //     console.log('Total Tours:', count);
        //     console.log('Tours (Page 1):', tours);
        //     res.send(tours);
        // } else {
        //     console.log('Category not found');
        // }
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
