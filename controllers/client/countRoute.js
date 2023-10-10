const express = require("express");
const router = express.Router();

const Count = require("../../models/CountModel");

router.post("/", (req, res) => {
    Count.increment('count', { by: 1, where: { id: 1 } })
});

module.exports = router;
