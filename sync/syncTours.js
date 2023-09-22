const Tour = require('../models/TourModel')
Tour.sync({ force: true })
    .then(() => {
        console.log('User table created successfully.');
    })
    .catch((error) => {
        console.error('Error creating User table:', error);
    });