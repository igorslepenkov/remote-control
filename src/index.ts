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
import { drawCircle } from "./drawing/circle.js";
import { drawSquare } from "./drawing/square.js";
import { drawRectangle } from "./drawing/rectangle.js";
import { printScreen } from "./printScreen/printscreen.js";
import { logResult } from "./helpers/logResult.js";

const HTTP_PORT = 3000;
httpServer.listen(HTTP_PORT);

httpServer.on("listening", () => {
  console.log(`Starting static http server on the ${HTTP_PORT} port`);
});

const wsServer = new WebSocketServer({ port: 8080 });

wsServer.on("headers", (headers) => {
  console.log(headers);
});

wsServer.on("connection", (ws, request) => {
  console.log(`Websocket has been started at ${request.rawHeaders[1]}`);
  ws.on("message", async (message) => {
    const input = getInput(message.toString());
    if (input.command === "mouse_up") {
      mouseUp(input.value);
      ws.send(`${input.command}\0`);
      logResult(input.command);
    } else if (input.command === "mouse_down") {
      mouseDown(input.value);
      ws.send(`${input.command}\0`);
      logResult(input.command);
    } else if (input.command === "mouse_left") {
      mouseLeft(input.value);
      ws.send(`${input.command}\0`);
      logResult(input.command);
    } else if (input.command === "mouse_right") {
      mouseRight(input.value);
      ws.send(`${input.command}\0`);
      logResult(input.command);
    } else if (input.command === "mouse_position") {
      const mousePos = getMousePosition();
      ws.send(`${input.command} {${mousePos.x}px},{${mousePos.y}px}\0`);
      logResult(
        input.command,
        `${input.command} {${mousePos.x}px},{${mousePos.y}px}`
      );
    } else if (input.command === "draw_circle") {
      drawCircle(input.value);
      ws.send(`${input.command}\0`);
      logResult(input.command);
    } else if (input.command === "draw_square") {
      drawSquare(input.value);
      ws.send(`${input.command}\0`);
      logResult(input.command);
    } else if (input.command === "draw_rectangle") {
      if (input.value2) {
        drawRectangle(input.value, input.value2);
        ws.send(`${input.command}\0`);
        logResult(input.command);
      }
    } else if (input.command === "prnt_scrn") {
      const imageObject = await printScreen();
      ws.send(`${input.command} ${imageObject.base64}\0`);
      logResult(input.command, imageObject.base64);
    }
  });
});

process.on("SIGINT", () => {
  process.stdout.write("Websocket has been closed\n");
  wsServer.close();
  process.exit();
});
