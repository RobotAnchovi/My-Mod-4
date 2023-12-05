const express = require("express");
const app = express();
const dogsRouter = require("./routes/dogs");

app.use(express.json());
app.use("/dogs", dogsRouter);

// Logger Middleware
app.use((req, res, next) => {
  res.on("finish", () => {
    console.log(`Logged ${req.method} ${req.originalUrl} - ${res.statusCode}`);
  });
  next();
});

// Use the dogs router for requests to /dogs

// For testing purposes, GET /
app.get("/", (req, res) => {
  res.json(
    "Express server running. No content provided at root level. Please use another route."
  );
});

// For testing express.json middleware
app.post("/test-json", (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.json(req.body);
  next();
});

// For testing express-async-errors
app.get("/test-error", async (req, res) => {
  throw new Error("Hello World!");
});

// Resource Not Found Middleware
app.use((req, res, next) => {
  const error = new Error("The requested resource couldn't be found.");
  error.statusCode = 404;
  throw error;
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err); // Log the error
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";
  const stack = process.env.NODE_ENV !== "production" ? err.stack : undefined;
  res.status(statusCode).json({ message, statusCode, stack });
});

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
