const express = require('express');
const router = express.Router();
const Tour = require('../../models/TourModel')
router.get('/hottour', (req, res) => {
    console.log(req.params.category);
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
        where: { category_id: 1 },
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
        where: { category_id: 2 },
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
        where: { category_id: 3 },
        order: [['createdAt', 'DESC']],
        limit: 10,
    }).then((result) => {
        const { count, rows } = result;
        res.send(result)
    }).catch((error) => {
        console.error(error);
    })
})
module.exports = router;
