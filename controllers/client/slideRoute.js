const express = require("express");
const router = express.Router();
const Slider = require("../../models/SliderModel");

router.get("/", (req, res) => {
    Slider.findAndCountAll({
        order: [["createdAt", "DESC"]],
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
