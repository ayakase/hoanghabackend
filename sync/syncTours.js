const Tour = require('../models/TourModel')
Tour.sync({ force: true })
    .then(() => {
        console.log('User table created successfully.');
        // Tour.create({
        //     title: "Tour test",
        //     days: 5,
        //     schedule: " from a to b",
        //     transportation: "vehicle",
        //     price: 100
        // })
    })
    .catch((error) => {
        console.error('Error creating User table:', error);
    });