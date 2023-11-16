const express = require('express');
const router = express.Router();
const Order = require('../../models/OrderModel')
const Tour = require('../../models/TourModel');
router.get('/:id', (req, res) => {
    Order.findAll({
        where: { id: req.params.id },
        include:{
            model: Tour,
        }
    }).then((result) => {
        res.send(result)
    }).catch((error) => {
        console.error(error);
    })
})

module.exports = router;
