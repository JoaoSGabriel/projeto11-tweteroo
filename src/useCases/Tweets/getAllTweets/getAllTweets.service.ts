import { Tweet } from "../../../models/Tweet";
import { TweetRepository } from "../../../repositories/TweetRepository";

export class GetAllTweetsService {
  constructor(private tweetRepository: TweetRepository) {}

  execute(): Tweet[] {
    return this.tweetRepository.getAll();
  }
}
