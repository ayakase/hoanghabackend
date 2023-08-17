'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Tours', 'schedule', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.addColumn('Tours', 'duration', {
          type: Sequelize.DataTypes.INTEGER,
        }, { transaction: t })
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Tours', 'schedule', { transaction: t }),
        queryInterface.removeColumn('Tours', 'duration', { transaction: t })
      ]);
    });
  }
};
