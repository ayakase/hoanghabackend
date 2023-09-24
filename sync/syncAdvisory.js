const Advisory = require('../models/AdvisoryModel');
Advisory.sync({ force: true })
    .then(() => {
        console.log('User table created successfully.');
    })
    .catch((error) => {
        console.error('Error creating User table:', error);
    });