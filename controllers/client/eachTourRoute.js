const express = require('express');
const router = express.Router();
const Tour = require('../../models/TourModel')

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    Tour.findAll({
        where: { id: req.params.id },
    }).then((result) => {
        res.send(result)
    }).catch((error) => {
        console.error(error);
    })
})

module.exports = router;
