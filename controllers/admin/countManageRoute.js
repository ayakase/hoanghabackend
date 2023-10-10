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
// router.delete("/:id", (req, res) => {
//     post
//         .destroy({ where: { id: req.params.id } })
//         .then((result) => {
//             console.log(result);
//             res.send("done");
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// });
module.exports = router;
