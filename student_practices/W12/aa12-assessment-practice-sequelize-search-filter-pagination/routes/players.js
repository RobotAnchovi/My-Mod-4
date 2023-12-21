const express = require("express");
const router = express.Router();
const { Sequelize } = require("sequelize");
const { Player } = require("../db/models");

router.get("/", async (req, res) => {
  try {
    let { firstName, number, page = 1, size = 2 } = req.query;
    const where = {};

    if (firstName !== undefined) {
      if (firstName.trim() === "") {
        return res.status(400).json({
          errors: [{ message: "firstName filter should not be empty" }],
        });
      }
      where.firstName = Sequelize.where(
        Sequelize.fn("lower", Sequelize.col("firstName")),
        Sequelize.fn("lower", firstName)
      );
    }

    if (number) {
      number = parseInt(number);
      if (isNaN(number) || number < 0) {
        return res.status(400).json({
          errors: [
            {
              message: "number filter should be a number greater or equal to 0",
            },
          ],
        });
      }
      where.number = number;
    }

    // Ensure size is not greater than 10
    size = Math.min(size, 10);

    const players = await Player.findAll({
      where,
      limit: parseInt(size), // Ensure size is a number
      offset: (parseInt(page) - 1) * parseInt(size), // Ensure page is a number
    });

    return res.json({
      players,
      page: parseInt(page),
      size: parseInt(size),
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ errors: [{ message: "Internal Server Error" }] });
  }
});

module.exports = router;
