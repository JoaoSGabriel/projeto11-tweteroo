import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

const accounts = [];
const twetts = [
    {username: "Michael Scott",
    avatar: "https://cdn.mensagenscomamor.com/content/images/m000575215.jpg?v=1&w=480&h=480",
    tweet: "I'm dead inside"},
    {username: "Jim Halpert",
    avatar: "https://rollingstone.uol.com.br/media/uploads/john-krasinski-the-office_reproducao.jpg",
    tweet: "Not a bad day"},
    {username: "Pam Beesly",
    avatar: "https://i.pinimg.com/originals/b4/37/0b/b4370be92a23d01d414d94983c2fb925.jpg",
    tweet: "I hate the idea that someone out there hates me."},
    {username: "Ryan Howard",
    avatar: "https://br.web.img3.acsta.net/r_1280_720/newsv7/20/08/20/22/34/26755250.jpg",
    tweet: "I hooked up with her on February 13th"},
    {username: "dwight Schrute",
    avatar: "https://rollingstone.uol.com.br/media/_versions/rainn_wilson_como_dwight_schrute_em_the_office_foto__reproducao_via_imdb_widelg.jpg",
    tweet: "Today, smokes will save lives"}
];

server.post('/sign-up', (req, res) => {
    const { username, avatar } = req.body;
    if (!username || !avatar) {
        return res.status(400).send({error: "Envie todos os campos"})
    }
    if (accounts.find(value => value.username === username)) {
        return res.status(400).send({error: "Esta conta já existe!"})
    }
    accounts.push({
        username: username,
        avatar: avatar});
    res.status(201).send("OK");
});

server.post('/tweets', (req, res) => {
    const username = req.headers.username
    const { tweet } = req.body;
    if (!username || !tweet) {
        return res.status(400).send({error: "Envie todos os campos"})
    }
    const searchAccount = accounts.find(value => value.username === username)
    twetts.push({
        username: username,
        avatar: searchAccount.avatar, 
        tweet: tweet});
    res.status(201).send("OK");
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
    for (let i = twetts.length -1; i >= 0; i--) {
        tweetServer.push(twetts[i]);
    }
    res.send(tweetServer);
});


server.listen(5000, () => console.log('Listen on 5000'));