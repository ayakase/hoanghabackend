const Tour = require('../models/TourModel')
const Order = require('../models/OrderModel');
const Category = require('../models/CategoryModel');
const Advisory = require('../models/AdvisoryModel');
const sequelize = require('../connect');

async function syncModelsSequentially() {
    try {
        // Sync Category model
        await sequelize.drop();

        await Category.sync({ force: true });
        console.log('Category table created');
        await Category.bulkCreate([
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
            }]),
            console.log('Input categories');
        // Sync Tour model
        await Tour.sync({ force: true });
        console.log('Tour table created');

        // Sync Order model
        await Order.sync({ force: true });
        console.log('Order table created');

        // Sync FooterForm model
        await Advisory.sync({ force: true });
        console.log('Advisory table created');
    } catch (error) {
        console.error('Error creating tables:', error);
    }
}

syncModelsSequentially();

// Category.sync({ force: true })
//     .then(() => {
//         console.log('User table created successfully.');
//         Category.bulkCreate([
//             {
//                 id: 1,
//                 name: "Trung Quốc",
//                 note: "none"
//             },
//             {
//                 id: 2,
//                 name: "Trong nước",
//                 note: "none"
//             },
//             {
//                 id: 3,
//                 name: "Quốc tế",
//                 note: "none"
//             }]
//         )
//     })
//     .catch((error) => {
//         console.error('Error creating User table:', error);
//     });
// Tour.sync({ force: true })
//     .then(() => {
//         console.log('User table created successfully.');
//     })
//     .catch((error) => {
//         console.error('Error creating User table:', error);
//     });
// Order.sync({ force: true })
//     .then(() => {
//         console.log('User table created successfully.');
//     })
//     .catch((error) => {
//         console.error('Error creating User table:', error);
//     });
// FooterForm.sync({ force: true })
//     .then(() => {
//         console.log('User table created successfully.');
//     })
//     .catch((error) => {
//         console.error('Error creating User table:', error);
//     });