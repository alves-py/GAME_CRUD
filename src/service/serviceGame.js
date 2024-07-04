const {
  createGameRepository,
  updateGameRepository,
  getGamesRepository,
  getGameIdRepository,
  deleteGameRepository,
} = require("../repository/gameRepository");

const createGameService = (name, description, genre, platform) => {
  return createGameRepository(name, description, genre, platform);
};

const updateGameService = (id, name, description, genre, platform) => {
  return updateGameRepository(id, name, description, genre, platform);
};

const getGamesService = () => {
  return getGamesRepository();
};

const getGameIdService = (id) => {
  return getGameIdRepository(id);
};

const deleteGameService = (id) => {
  return deleteGameRepository(id);
};

module.exports = {
  createGameService,
  updateGameService,
  getGamesService,
  getGameIdService,
  deleteGameService,
};
