"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const customDate = new Date("2023-01-01");
    await queryInterface.bulkInsert("Colors", [
      { name: "aqua", createdAt: customDate, updatedAt: customDate },
      { name: "fuchsia", createdAt: customDate, updatedAt: customDate },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Colors", {
      name: { [Sequelize.Op.in]: ["aqua", "fuchsia"] },
    });
  },
};
