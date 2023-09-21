const Order = require('../models/OrderModel');
Order.sync({ force: true })
    .then(() => {
        console.log('User table created successfully.');
    })
    .catch((error) => {
        console.error('Error creating User table:', error);
    });