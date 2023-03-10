import { Tweet } from "../models/Tweet";

export class TweetRepository {
  private tweets: Tweet[];
  private static INSTANCE: TweetRepository;

  constructor() {
    this.tweets = [];
  }

  public static getInstance(): TweetRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new TweetRepository();
    }

    return this.INSTANCE;
  }

  create({ username, tweet, avatar }: Tweet): void {
    const newTweet: Tweet = new Tweet(username, tweet, avatar);
    this.tweets.push(newTweet);
  }

  getAll(): Tweet[] {
    let tweetServer = [];
    if (this.tweets.length >= 10) {
      for (let i = this.tweets.length - 1; i > this.tweets.length - 11; i--) {
        tweetServer.push(this.tweets[i]);
      }
      return tweetServer;
    }

    for (let i = this.tweets.length - 1; i >= 0; i--) {
      tweetServer.push(this.tweets[i]);
    }

    return tweetServer;
  }
}
