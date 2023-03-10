import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.router";
import tweetRouter from "./routes/tweet.router";

const server = express();
server.use(cors());
server.use(express.json());
server.use(authRouter).use(tweetRouter);

server.listen(5000, () => console.log("Listen on 5000"));
