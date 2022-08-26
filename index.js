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
    const { username, avatar } = req.body;
    if (!username || !avatar) {
        return res.status(400).send({error: "Envie todos os campos"})
    }
    accounts.push({
        username: username,
        avatar: avatar});
    res.send("OK");
});

server.post('/tweets', (req, res) => {
    const { username, tweet } = req.body;
    if (!username || !tweet) {
        return res.status(400).send({error: "Envie todos os campos"})
    }
    const searchAccount = accounts.find(value => value.username === username)
    twetts.push({
        username: username,
        avatar: searchAccount.avatar, 
        tweet: tweet});
    res.send("OK");
})

server.get('/tweets', (req, res) => {
    let tweetServer = [];
    if(twetts.length >= 10) {
        for (let i = twetts.length -1; i > (twetts.length - 11); i--) {
            tweetServer.push(twetts[i]);
        }
        res.send(tweetServer);
        return;
    }
    res.send(twetts);
});


server.listen(5000, () => console.log('Listen on 5000'));