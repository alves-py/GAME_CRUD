const Joi = require("joi");

const allFieldsGame = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "O campo (name) é obrigatório",
    "string.base": "O campo (name) precisa ser uma string",
    "string.empty": "O campo (name) precisa ser preenchido",
  }),
  description: Joi.string().required().messages({
    "any.required": "O campo (description) é obrigatório",
    "string.base": "O campo (description) precisa ser uma string",
    "string.empty": "O campo (description) precisa ser preenchido",
  }),
  genre: Joi.string().required().messages({
    "any.required": "O campo (genre) é obrigatório",
    "string.base": "O campo (genre) precisa ser uma string",
    "string.empty": "O campo (genre) precisa ser preenchido",
  }),
  platform: Joi.string().required().messages({
    "any.required": "O campo (platform) é obrigatório",
    "string.base": "O campo (platform) precisa ser uma string",
    "string.empty": "O campo (platform) precisa ser preenchido",
  }),
});

module.exports = allFieldsGame;
