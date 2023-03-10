import { Request, Response } from "express";
import { Tweet } from "../models/Tweet";
import authController from "./auth.controller";

class TweetController {
  private tweets: Tweet[];

  constructor() {
    this.tweets = [];
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  create(req: Request, res: Response): Response {
    const { tweet, username } = req.body;
    if (!username || !tweet) {
      return res.status(400).send({ error: "Envie todos os campos" });
    }

    const { avatar } = authController.getLoggedUser(username);

    this.tweets.push({ username, avatar, tweet });

    return res.status(201).send("Ok, criei aqui pra você");
  }

  getAll(req: Request, res: Response): Response {
    let tweetServer = [];
    if (this.tweets.length >= 10) {
      for (let i = this.tweets.length - 1; i > this.tweets.length - 11; i--) {
        tweetServer.push(this.tweets[i]);
      }
      return res.status(200).send(tweetServer);
    }
    for (let i = this.tweets.length - 1; i >= 0; i--) {
      tweetServer.push(this.tweets[i]);
    }
    return res.status(200).send(tweetServer);
  }
}

export default new TweetController();
