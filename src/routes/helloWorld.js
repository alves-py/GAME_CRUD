const { Router } = require("express");
const logger = require("../middlewares/log.js");

const helloWorld = Router();

helloWorld.use(logger);

helloWorld.get("/", (req, res) => {
  res.send("Hello world");
});

module.exports = helloWorld;
