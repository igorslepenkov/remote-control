import { WebSocketServer } from "ws";
import { httpServer } from "./http_server/index.js";
import { getInput } from "./helpers/inputGetter.js";
import {
  mouseUp,
  mouseDown,
  mouseLeft,
  mouseRight,
  getMousePosition,
} from "./navigation/navigation.js";

const HTTP_PORT = 3000;
httpServer.listen(HTTP_PORT);

httpServer.on("listening", () => {
  console.log(`Starting static http server on the ${HTTP_PORT} port`);
});

const wsServer = new WebSocketServer({ port: 8080 });

wsServer.on("connection", (ws, request) => {
  ws.on("message", (message) => {
    const input = getInput(message.toString());
    if (input.command === "mouse_up") {
      mouseUp(input.value);
      ws.send(`${input.command}`);
    } else if (input.command === "mouse_down") {
      mouseDown(input.value);
      ws.send(`${input.command}`);
    } else if (input.command === "mouse_left") {
      mouseLeft(input.value);
      ws.send(`${input.command}`);
    } else if (input.command === "mouse_right") {
      mouseRight(input.value);
      ws.send(`${input.command}`);
    } else if (input.command === "mouse_position") {
      const mousePos = getMousePosition();
      console.log(mousePos);
      ws.send(`${input.command} {${mousePos.x}px},{${mousePos.y}px}`);
    }
  });
});
