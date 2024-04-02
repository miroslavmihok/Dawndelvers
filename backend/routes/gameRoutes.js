import express from "express";
const router = express.Router();
import {
  getGames,
  getSingleGame,
  updateGame,
  addGame,
  deleteGame,
} from "../controllers/gameController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router
  .route("/")
  .get(getGames)
  .put(protect, admin, updateGame)
  .post(protect, admin, addGame);
router.route("/:id").delete(protect, admin, deleteGame);
router.route("/:gameUrl").get(getSingleGame);

export default router;
