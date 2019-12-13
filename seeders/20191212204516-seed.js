'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Stories', [
        
        {
          url: 'cnn.com',
          source: "CNN",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: 'yahoo.com',
          source: "New York Times",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: 'msn.com',
          source: "MSN",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
