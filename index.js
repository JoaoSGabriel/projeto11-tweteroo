import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

const accounts = [];
const twetts = [
    {username: "bobesponja",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub"}
];

server.post('/sign-up', (req, res) => {
    const user = req.body;
    accounts.push({username: user.username, avatar: user.avatar});
    res.send("OK");
});

server.post('/tweets', (req, res) => {
    const newTweet = req.body;
    const searchAccount = accounts.find(value => value.username === newTweet.username)
    twetts.push({username: newTweet.username, avatar: searchAccount.avatar, tweet: newTweet.tweet});
    res.send("OK");
})

server.get('/tweets', (req, res) => {
    res.send(twetts);
});


server.listen(5000, () => console.log('Listen on 5000'));