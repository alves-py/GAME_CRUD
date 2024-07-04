const knex = require("../db/knex");

const createGameRepository = async (name, description, genre, platform) => {
  try {
    const [game] = await knex("games")
      .insert({
        name,
        description,
        genre,
        platform,
      })
      .returning("*");
    return game;
  } catch (error) {
    throw new Error("Failed to create game");
  }
};

const updateGameRepository = async (id, name, description, genre, platform) => {
  try {
    const [game] = await knex("games")
      .where({ id })
      .update({
        name,
        description,
        genre,
        platform,
      })
      .returning("*");
    return game;
  } catch (error) {
    throw new Error("Failed to update game");
  }
};

const getGamesRepository = async () => {
  try {
    const games = await knex("games").select("*");
    return games;
  } catch (error) {
    throw new Error("Failed to retrieve games");
  }
};

const getGameIdRepository = async (id) => {
  try {
    const game = await knex("games").where({ id }).first();
    return game;
  } catch (error) {
    throw new Error("Failed to retrieve game");
  }
};

const deleteGameRepository = async (id) => {
  try {
    await knex("games").where({ id }).del();
  } catch (error) {
    throw new Error("Failed to delete game");
  }
};

module.exports = {
  createGameRepository,
  updateGameRepository,
  getGamesRepository,
  getGameIdRepository,
  deleteGameRepository,
};
