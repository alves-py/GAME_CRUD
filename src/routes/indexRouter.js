const { Router } = require("express");
const gameRouters = require("./gameRouters.js");
const helloWorld = require("./helloWorld.js");

const routes = Router();

routes.use("/game", gameRouters);
routes.use("/", helloWorld);

module.exports = routes;
