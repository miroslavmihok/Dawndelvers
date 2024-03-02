import asyncHandler from "../middleware/asyncHandler.js";
import Game from "../models/gameModel.js";

const getGames = asyncHandler(async (req, res) => {
  const games = await Game.find({});
  res.json(games);
});
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

export { getGames, getSingleGame };
