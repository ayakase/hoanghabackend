const express = require('express');
const router = express.Router();
const Tour = require('../../models/TourModel')
const Post = require("../../models/PostModel");
const Category = require('../../models/CategoryModel');
const Region = require('../../models/RegionModel');
const Location = require('../../models/LocationModel');
router.get('/hottour', (req, res) => {
    // console.log(req.params.category);
    Tour.findAndCountAll({
        where: {
            ishottour: 1
        },
        order: [['createdAt', 'DESC']],
        limit: 10,
    }).then((result) => {
        const { count, rows } = result;
        res.send(result)
    }).catch((error) => {
        console.error(error);
    })
})
router.get('/china', (req, res) => {
    Tour.findAndCountAll({
        where: { location_id: 33 },
        order: [['createdAt', 'DESC']],
        limit: 10,
    }).then((result) => {
        const { count, rows } = result;
        res.send(result)
    }).catch((error) => {
        console.error(error);
    })
})
router.get('/domestic', (req, res) => {
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
                        id: 1
                    },
                    required: true
                }
            }
        },
        order: [['createdAt', 'DESC']],
        limit: 10,
    }).then((result) => {
        const { count, rows } = result;
        res.send(result)
    }).catch((error) => {
        console.error(error);
    })
})
router.get('/foreign', (req, res) => {
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
                        id: 2,
                    },
                    required: true
                }
            }
        },
        order: [['createdAt', 'DESC']],
        limit: 10,
    }).then((result) => {
        const { count, rows } = result;
        res.send(result)
    }).catch((error) => {
        console.error(error);
    })
})
router.get("/post-grid", (req, res) => {
    Post.findAndCountAll({
        where: {
            publish: true,
        },
        order: [["createdAt", 'DESC']],
        limit: 6,
    })
        .then((result) => {
            const { count, rows } = result;
            res.send(result);
        })
        .catch((error) => {
            console.error(error);
        });
});
module.exports = router;
