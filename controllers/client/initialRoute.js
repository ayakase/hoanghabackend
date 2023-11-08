const express = require('express');
const router = express.Router();
const Tour = require('../../models/TourModel')
const Category = require('../../models/CategoryModel');
const Region = require('../../models/RegionModel');
const Location = require('../../models/LocationModel');
const Count = require("../../models/CountModel");

router.post("/count", (req, res) => {
    Count.increment('count', { by: 1, where: { id: 1 } })
});
router.get("/connect", (req, res) => {
    res.send("Connected to Backend");
});
router.get('/menu', (req, res) => {
    Category.findAll({
        include: {
            model: Region,
            include: {
                model: Location
            }
        }
    }).then((result) => {
        console.log(result)
        res.send(result)
    })
})
module.exports = router;
