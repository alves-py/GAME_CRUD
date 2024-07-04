const { Router } = require("express");
const gameRouters = require("./gameRouters.js");

const routes = Router();

routes.use("/game", gameRouters);

module.exports = routes;
