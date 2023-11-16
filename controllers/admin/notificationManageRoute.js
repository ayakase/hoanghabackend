const express = require('express');
const router = express.Router();
const Notification = require('../../models/NotificationModel');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/:page', (req, res) => {
    Notification.findAndCountAll({
        order: [["createdAt", 'DESC']],
        limit: 10,
        offset: (req.params.page - 1) * 10
    }).then((result) => {
        const { count, rows } = result;
        res.send(result)
    }).catch((error) => {
        console.error(error);
    })
})
router.put('/:id', (req, res) => {
    Order.findOne({
        where: { id: req.params.id }
    }).then((result) => {
        if (result.solved == 0) {
            Order.update({
                solved: 1
            },
                {
                    where: { id: req.params.id }
                },
            ).then((result) => {
                const { count, rows } = result;
                res.send(result)
            }).catch((error) => {
                console.error(error);
            })
        } else {
            Order.update({
                solved: 0
            },
                {
                    where: { id: req.params.id }
                },
            ).then((result) => {
                const { count, rows } = result;
                res.send(result)
            }).catch((error) => {
                console.error(error);
            })
        }
    })
});
module.exports = router;
