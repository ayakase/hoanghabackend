const express = require('express');
const router = express.Router();
const Tour = require('../../models/TourModel')
router.get('/:category/:orderby/:order/:page', (req, res) => {
    console.log(req.params.category);
    Tour.findAndCountAll({
        where: { tourcategory: req.params.category },
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
router.delete('/:id', (req, res) => {
    Tour.destroy({ where: { id: req.params.id } })
        .then((result) => {
            console.log(result)
            res.send("done")
        }).catch((error) => {
            console.error(error);
        })
})
module.exports = router;
