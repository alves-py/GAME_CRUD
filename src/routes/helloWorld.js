const { Router } = require("express");

const helloWorld = Router();

helloWorld.get("/", (req, res) => {
  res.send("Hello world");
});

module.exports = helloWorld;
