"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("Colors", {
      fields: ["name"],
      type: "unique",
      name: "unique_color_name",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("Colors", "unique_color_name");
  },
};
