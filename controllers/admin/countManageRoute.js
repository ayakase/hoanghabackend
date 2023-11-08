const express = require("express");
const router = express.Router();

const Count = require("../../models/CountModel");

router.get("/", (req, res) => {
    Count.findOne({
        where: { id: 1 }
    }).then((result) => {
        res.send(result);
    });
});

module.exports = router;
