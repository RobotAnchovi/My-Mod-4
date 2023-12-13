// Instantiate Express and the application - DO NOT MODIFY
const express = require("express");
const app = express();

// Error handling, env variables, and json middleware - DO NOT MODIFY
require("express-async-errors");
require("dotenv").config();
app.use(express.json());

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require("./db/models");

// Index of all puppies - DO NOT MODIFY
app.get("/puppies", async (req, res, next) => {
  const allPuppies = await Puppy.findAll({ order: [["name", "ASC"]] });

  res.json(allPuppies);
});

// STEP 1: Update a puppy by id
app.put("/puppies/:puppyId", async (req, res, next) => {
  const { puppyId } = req.params;
  const { ageYrs, weightLbs, microchipped } = req.body;

  const puppyToUpdate = await Puppy.findByPk(puppyId);
  if (puppyToUpdate) {
    await puppyToUpdate.update({ ageYrs, weightLbs, microchipped });
    res.json({ message: "Puppy updated!", puppy: puppyToUpdate });
  } else {
    const err = new Error("Puppy not found");
    err.status = 404;
    next(err);
  }
});

// STEP 2: Delete a puppy by id
app.delete("/puppies/:puppyId", async (req, res, next) => {
  const { puppyId } = req.params;

  const puppyToDelete = await Puppy.findByPk(puppyId);
  if (puppyToDelete) {
    await puppyToDelete.destroy();
    res.json({ message: "Puppy deleted!", puppy: puppyToDelete });
  } else {
    const err = new Error({ message: "Puppy not found" });
    err.status = 404;
    next(err);
  }
});

// Root route - DO NOT MODIFY
app.get("/", (req, res) => {
  res.json({
    message: "API server is running",
  });
});

// Set port and listen for incoming requests - DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log("Server is listening on port", port));
} else {
  module.exports = app;
}
