const { Router } = require("express");
const game = require("../controllers/controllerGame.js");
const allFieldsGame = require("../schemas/schemasGame.js");
const validation = require("../middlewares/validation.js");

const gameRotas = Router();

gameRotas.get("/", game.listargames);
gameRotas.get("/:id", game.listargamesID);

gameRotas.post(
  "/",
  validation.validationGameBody(allFieldsGame),
  game.cadastrargame
);

gameRotas.put(
  "/:id",
  validation.validationGameBody(allFieldsGame),
  game.EditarDadosgame
);

gameRotas.delete("/:id", validation.validarPedidogame, game.excluirgame);

module.exports = gameRotas;
