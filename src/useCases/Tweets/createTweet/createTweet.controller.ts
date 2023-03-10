import { Request, Response } from "express";
import { CreateTweetService } from "./createTweet.service";

export class CreateTweetController {
  constructor(private createTweetService: CreateTweetService) {}

  handle(req: Request, res: Response): Response {
    const { username, tweet } = req.body;

    this.createTweetService.execute({ username, tweet });

    return res.sendStatus(201);
  }
}
