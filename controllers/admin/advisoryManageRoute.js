const express = require('express');
const router = express.Router();
const Advisory = require('../../models/AdvisoryModel');
router.get('/:order/:page', (req, res) => {
    console.log(req.params);
    Advisory.findAndCountAll({
        order: [["createdAt", req.params.order]],
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
