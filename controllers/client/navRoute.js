const express = require('express');
const router = express.Router();
const Tour = require('../../models/TourModel')
router.get('/:category/:orderby/:order/:page', (req, res) => {
    console.log(req.params.category);
    Tour.findAndCountAll({
        where: { category_id: req.params.category },
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
