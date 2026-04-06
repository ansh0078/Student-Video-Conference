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
    const connectionDb = await mongoose.connect("mongodb://anshraj0078_db_user:AfZjYSF7KPl4a41X@ac-sc4tjyj-shard-00-00.vce31kn.mongodb.net:27017,ac-sc4tjyj-shard-00-01.vce31kn.mongodb.net:27017,ac-sc4tjyj-shard-00-02.vce31kn.mongodb.net:27017/?replicaSet=atlas-134o7m-shard-0&ssl=true&authSource=admin");
    console.log(`Database connected successfully: ${connectionDb.connection.host}`);
    server.listen(app.get("port"), () => {
        console.log(`Server is running on port ${app.get("port")}`);
    })
}

start();