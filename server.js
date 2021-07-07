const express = require("express");
const DishesRouter = require("./routes/dishes-router");

const server = express();

server.use("/api/dishes", DishesRouter);

server.get("/", async (req, res) => {
  res.send("welcome to the '/'");
});

module.exports = server;
