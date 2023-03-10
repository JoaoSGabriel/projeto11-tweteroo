import { Request, Response } from "express";
import { GetAllTweetsService } from "./getAllTweets.service";

export class GetAllTweetsController {
  constructor(private getAllTweetsService: GetAllTweetsService) {}

  handle(req: Request, res: Response): Response {
    const tweets = this.getAllTweetsService.execute();

    return res.send(tweets);
  }
}
