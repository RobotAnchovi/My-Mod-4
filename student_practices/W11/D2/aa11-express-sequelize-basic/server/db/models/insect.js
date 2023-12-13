"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Insect.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Name must be unique.",
        },
        validate: {
          notEmpty: {
            msg: "Name cannot be empty.",
          },
          isTitleCased(value) {
            if (
              value !== value.replace(/\b\w/g, (char) => char.toUpperCase())
            ) {
              throw new Error("Name must be title cased");
            }
          },
        },
      },
      description: DataTypes.STRING,
      territory: DataTypes.STRING,
      fact: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [0, 240],
            msg: "Fact must not exceed 240 characters.",
          },
        },
      },
      millimeters: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: {
            args: [0],
            msg: "Millimeters should have a minimum value of zero.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Insect",
    }
  );

  return Insect;
};
