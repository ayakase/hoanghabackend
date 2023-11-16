const express = require('express');
const Tour = require('../../models/TourModel')
const router = express.Router();
const Advisory = require('../../models/AdvisoryModel');
router.get('/:order/:page', (req, res) => {
    Advisory.findAndCountAll({
        order: [["createdAt", req.params.order]],
        limit: 10,
        include: {
            model: Tour,
        },
        offset: (req.params.page - 1) * 10
    }).then((result) => {
        const { count, rows } = result;
        res.send(result)
    }).catch((error) => {
        console.error(error);
    })
})
module.exports = router;
