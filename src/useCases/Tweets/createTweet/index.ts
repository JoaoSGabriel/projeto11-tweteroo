import { TweetRepository } from "../../../repositories/TweetRepository";
import { CreateTweetController } from "./createTweet.controller";
import { CreateTweetService } from "./createTweet.service";

const tweetRepository = TweetRepository.getInstance();
const createTweetService = new CreateTweetService(tweetRepository);
export const createTweetController = new CreateTweetController(
  createTweetService
);
