import asyncHandler from "../middleware/asyncHandler.js";
import Game from "../models/gameModel.js";

// @desc    Fetch all Games
// @route   GET /api/games
// @access  Public
const getGames = asyncHandler(async (req, res) => {
  const games = await Game.find({});
  res.json(games);
});

// @desc    Fetch single Game
// @route   GET /api/games/:gameUrl
// @access  Public
const getSingleGame = asyncHandler(async (req, res) => {
  const games = await Game.findOne({
    url: req.params.gameUrl,
  });

  if (games) {
    return res.json(games);
  } else {
    res.status(404);
    throw new Error(`No game found in with name: ${req.params.gameUrl}`);
  }
});

// @desc    Update game information
// @route   PUT /api/games
// @access  Private/Admin
const updateGame = asyncHandler(async (req, res) => {
  const game = await Game.findOne({ _id: req.body.id });

  if (game) {
    game.title = req.body.title;
    game.url = req.body.url;
    game.bg = req.body.bg;
    game.logo = req.body.logo;

    const updatedGame = await game.save();

    res.status(200).json({
      title: updatedGame.title,
      url: updatedGame.url,
      bg: updatedGame.bg,
      logo: updatedGame.logo,
    });
  } else {
    res.status(404);
    throw new Error("Game not found");
  }
});

// @desc    Add game
// @route   POST /api/games
// @access  Private/Admin
const addGame = asyncHandler(async (req, res) => {
  const { title, url, bg, logo } = req.body;

  const gameExists = await Game.findOne({ url });

  if (gameExists) {
    res.status(400);
    throw new Error("Game with this url path name already exists");
  }
  if (!title || !url || !bg || !logo) {
    res.status(400);
    throw Error("All fields must be filled");
  }

  const game = await Game.create({
    title,
    url,
    bg,
    logo,
  });

  res.status(201).json(game);
});

// @desc    Remove game
// @route   DELETE /api/games/:id
// @access  Private/Admin
const deleteGame = asyncHandler(async (req, res) => {
  const game = await Game.findById(req.params.id);

  if (game) {
    await Game.deleteOne({ _id: game._id });
    res.status(200).json({ message: "Game deleted" });
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { getGames, getSingleGame, updateGame, addGame, deleteGame };
