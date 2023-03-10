import { Tweet } from "../../../models/Tweet";
import { TweetRepository } from "../../../repositories/TweetRepository";
import { getLoggedUserService } from "../../Users/getLoggedUser";

interface IRequestTweet {
  username: string;
  tweet: string;
}

export class CreateTweetService {
  constructor(private tweetRepository: TweetRepository) {}

  execute({ username, tweet }: IRequestTweet): void {
    if (!username || !tweet) throw new Error("All fields are mandatory!");

    const { avatar } = getLoggedUserService.execute(username);

    this.tweetRepository.create({ username, tweet, avatar });
  }
}
