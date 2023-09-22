const Tour = require('../models/TourModel')
const Order = require('../models/OrderModel');
const Category = require('../models/CategoryModel');
const FooterForm = require('../models/FooterFormModel');

Category.sync({ force: true })
    .then(() => {
        console.log('User table created successfully.');
        Category.bulkCreate([
            {
                id: 1,
                name: "Trung Quốc",
                note: "none"
            },
            {
                id: 2,
                name: "Trong nước",
                note: "none"
            },
            {
                id: 3,
                name: "Quốc tế",
                note: "none"
            }]
        )
    })
    .catch((error) => {
        console.error('Error creating User table:', error);
    });
Tour.sync({ force: true })
    .then(() => {
        console.log('User table created successfully.');
    })
    .catch((error) => {
        console.error('Error creating User table:', error);
    });
Order.sync({ force: true })
    .then(() => {
        console.log('User table created successfully.');
    })
    .catch((error) => {
        console.error('Error creating User table:', error);
    });
FooterForm.sync({ force: true })
    .then(() => {
        console.log('User table created successfully.');
    })
    .catch((error) => {
        console.error('Error creating User table:', error);
    });