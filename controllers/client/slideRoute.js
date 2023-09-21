const express = require('express');
const router = express.Router();
const Tour = require('../../models/TourModel')
router.get('/:category/:order/:page', (req, res) => {
    Tour.findAll({
        where: { tourcategory: req.params.category },
        order: [["createdAt", req.params.order]],
        limit: 10,
    }).then((result) => {
        console.log(result);
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
