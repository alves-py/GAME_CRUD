const {
  createGameService,
  updateGameService,
  getGamesService,
  getGameIdService,
  deleteGameService,
} = require("../service/serviceGame");

const createGame = async (req, res) => {
  const { name, description, genre, platform } = req.body;
  const createdGame = await createGameService(
    name,
    description,
    genre,
    platform
  );
  return res.status(201).json(createdGame);
};

const updateGame = async (req, res) => {
  const { name, description, genre, platform } = req.body;
  const id = req.params.id;

  const updatedGame = await updateGameService(
    id,
    name,
    description,
    genre,
    platform
  );
  return res.status(200).json(updatedGame);
};

const getGames = async (req, res) => {
  const games = await getGamesService();
  return res.status(200).json(games);
};

const getGameID = async (req, res) => {
  const { id } = req.params;

  const getGameID = await getGameIdService(id);
  return res.status(200).json(getGameID);
};

const deleteGame = async (req, res) => {
  const { id } = req.params;
  await deleteGameService(id);
  return res.status(204).json();
};

module.exports = {
  createGame,
  updateGame,
  getGames,
  getGameID,
  deleteGame,
};
