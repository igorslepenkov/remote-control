import { WebSocketServer } from "ws";
import * as http from "http";
import * as Jimp from "jimp/*";
import * as robot from "robotjs";
import { httpServer } from "./http_server/index.js";
import rl from "readline";
import { stdin } from "process";

const HTTP_PORT = 3000;
httpServer.listen(HTTP_PORT);

httpServer.on("listening", () => {
  console.log(`Starting static http server on the ${HTTP_PORT} port`);
});

const wsServer = new WebSocketServer({ port: 8080 });

wsServer.on("connection", (ws, request) => {
  console.log(request.rawHeaders);
  ws.on("message", (message) => {
    console.log(message.toString());
  });
});
