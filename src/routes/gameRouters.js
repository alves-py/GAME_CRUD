const { Router } = require("express");
const game = require("../controllers/controllerGame.js");
const allFieldsGame = require("../schemas/schemasGame.js");
const validationGameBody = require("../middlewares/validation.js");

const gameRotas = Router();

gameRotas.get("/", game.getGames);
gameRotas.get("/:id", game.getGameID);
gameRotas.post("/", validationGameBody(allFieldsGame), game.createGame);
gameRotas.put("/:id", validationGameBody(allFieldsGame), game.updateGame);
gameRotas.patch("/:id", game.updateGamePath);
gameRotas.delete("/:id", game.deleteGame);

module.exports = gameRotas;
