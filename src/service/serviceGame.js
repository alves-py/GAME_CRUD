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

const updateGamePatchService = (id, name, description, genre, platform) => {
  let game = getGameIdRepository(id);

  const updatedGame = {
    name: name || game.name,
    description: description || game.description,
    genre: genre || game.genre,
    platform: platform || game.platform,
  };

  return updateGameRepository(
    id,
    updatedGame.name,
    updatedGame.description,
    updatedGame.genre,
    updatedGame.platform
  );
};

module.exports = {
  createGameService,
  updateGameService,
  getGamesService,
  getGameIdService,
  deleteGameService,
  updateGamePatchService,
};
