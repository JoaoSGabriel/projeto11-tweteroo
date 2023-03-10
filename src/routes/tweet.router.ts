import { Router } from "express";
import tweetController from "../controllers/tweet.controller";

const tweetRouter = Router();

tweetRouter.post("/tweets", tweetController.create);
tweetRouter.get("/tweets", tweetController.getAll);

export default tweetRouter;
