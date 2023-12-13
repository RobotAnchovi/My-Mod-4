"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Insects", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isTitleCased(value) {
            if (
              value !== value.replace(/\b\w/g, (char) => char.toUpperCase()) //! /\b\w/g is a regex that matches the first letter of each word in a string
            ) {
              throw new Error("Name must be title cased");
            }
          },
        },
      },
      description: {
        type: Sequelize.STRING,
      },
      territory: {
        type: Sequelize.STRING,
      },
      fact: {
        type: Sequelize.STRING(240),
      },
      millimeters: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Insects");
  },
};
