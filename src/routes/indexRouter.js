const { Router } = require("express");
const gameRouters = require("./gameRouters.js");
const helloWorld = require("./helloWorld.js");
const logger = require("../middlewares/log.js");

const routes = Router();

routes.use(logger);
routes.use("/game", gameRouters);
routes.use("/", helloWorld);

module.exports = routes;
