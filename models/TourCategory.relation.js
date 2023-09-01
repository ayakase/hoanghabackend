
// Define your models
const Category = require('./CategoryModel')(sequelize, Sequelize);
const Tour = require('./TourModel')(sequelize, Sequelize);

// Define the association
Category.hasMany(Tour, { foreignKey: 'categoryId' });
Tour.belongsTo(Category, { foreignKey: 'categoryId' });

// Sync the database to create the tables and apply associations
sequelize.sync()
    .then(() => {
        console.log('Database synchronized successfully.');
    })
    .catch((error) => {
        console.error('Error syncing database:', error);
    });