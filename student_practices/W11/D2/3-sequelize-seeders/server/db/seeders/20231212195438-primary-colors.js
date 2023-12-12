"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Colors", [
      { name: "red", createdAt: new Date(), updatedAt: new Date() },
      { name: "blue", createdAt: new Date(), updatedAt: new Date() },
      { name: "yellow", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Colors", {
      name: {
        [Sequelize.Op.in]: ["red", "blue", "yellow"],
      },
    });
  },
};
