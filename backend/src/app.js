if(process.env.NODE_ENV != "production" ){
    require("dotenv").config();
}

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "node:http";
import { ConnectToSocket } from "./controllers/socketManager.js";

import userRouter from "./routes/user.routes.js";

const app = express();
const server = createServer(app);
const io = ConnectToSocket(server);


app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({ limit: "40Kb" }));
app.use(express.urlencoded({ extended: true, limit: "40Kb" }));

app.use("/api/v1/user", userRouter);

const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database connected successfully`);
    server.listen(app.get("port"), () => {
        console.log(`Server is running on port ${app.get("port")}`);
    })
}

start();