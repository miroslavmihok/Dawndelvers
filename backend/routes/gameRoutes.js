import express from "express";
const router = express.Router();
import { getGames, getSingleGame } from "../controllers/gameController.js";

router.route("/").get(getGames);
router.route("/:gameUrl").get(getSingleGame);

export default router;
