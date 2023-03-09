import authController from "./auth.controller.js";

class TweetController {
  constructor() {
    this.tweets = [];
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  create(req, res) {
    const { tweet, username } = req.body;
    if (!username || !tweet) {
      return res.status(400).send({ error: "Envie todos os campos" });
    }

    const { avatar } = authController.getLoggedUser(username);

    this.tweets.push({ username, avatar, tweet });

    res.status(201).send("Ok, criei aqui pra você");
  }

  getAll(req, res) {
    let tweetServer = [];
    if (this.tweets.length >= 10) {
      for (let i = this.tweets.length - 1; i > this.tweets.length - 11; i--) {
        tweetServer.push(this.tweets[i]);
      }
      res.send(tweetServer);
      return;
    }
    for (let i = this.tweets.length - 1; i >= 0; i--) {
      tweetServer.push(this.tweets[i]);
    }
    res.send(tweetServer);
  }
}

export default new TweetController();
