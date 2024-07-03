const {
  createGame,
  updateGame,
  getGames,
  getGameId,
  deleteGame,
} = require("../service/serviceGame");

const createGame = async (req, res) => {
  const { descricao, quantidade_estoque, valor, categoria_id } = req.body;
  const { originalname, mimetype, buffer } = req.file;
  const produtoCadastrado = await createGame(
    descricao,
    quantidade_estoque,
    valor,
    categoria_id,
    originalname,
    mimetype,
    buffer
  );
  return res.status(201).json(produtoCadastrado);
};

const updateGame = async (req, res) => {
  const { descricao, quantidade_estoque, valor, categoria_id } = req.body;
  const { originalname, mimetype, buffer } = req.file;
  const id = req.params.id;

  await updateGame(
    descricao,
    quantidade_estoque,
    valor,
    categoria_id,
    id,
    originalname,
    mimetype,
    buffer
  );
  return res.status(204).json();
};

const getGames = async (req, res) => {
  const { categoria_id } = req.query;

  const produtos = await getGames(categoria_id);
  return res.status(200).json(produtos);
};

const getGameID = async (req, res) => {
  const { id } = req.params;

  const produtoID = await getGameId(id);
  return res.status(200).json(produtoID);
};

const deleteGame = async (req, res) => {
  const { id } = req.params;
  console.log(`Chegou aqui`);
  await deleteGame(id);
  return res.status(204).json();
};

module.exports = {
  createGame,
  updateGame,
  getGames,
  getGameID,
  deleteGame,
};
