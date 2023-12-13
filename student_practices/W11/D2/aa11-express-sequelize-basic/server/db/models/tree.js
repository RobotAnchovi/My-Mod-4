"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tree.init(
    {
      tree: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "The tree attribute cannot be empty." },
        },
        unique: { msg: "The tree attribute must be unique." },
      },
      location: DataTypes.STRING,
      heightFt: {
        type: DataTypes.FLOAT,
        validate: {
          min: {
            args: [0],
            msg: "heightFt should have a minimum value of zero.",
          },
        },
      },
      groundCircumferenceFt: {
        type: DataTypes.FLOAT,
        validate: {
          min: {
            args: [0],
            msg: "groundCircumferenceFt should have a minimum value of zero.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Tree",
    }
  );
  return Tree;
};
