import robot from "robotjs";

const mouseUp = (yCoordinates: number) => {
  const mousePos = robot.getMousePos();

  robot.moveMouseSmooth(mousePos.x, mousePos.y - yCoordinates);
};

const mouseDown = (yCoordinates: number) => {
  const mousePos = robot.getMousePos();

  robot.moveMouseSmooth(mousePos.x, mousePos.y + yCoordinates);
};

const mouseLeft = (xCoordinates: number) => {
  const mousePos = robot.getMousePos();

  robot.moveMouseSmooth(mousePos.x - xCoordinates, mousePos.y);
};

const mouseRight = (xCoordinates: number) => {
  const mousePos = robot.getMousePos();

  robot.moveMouseSmooth(mousePos.x + xCoordinates, mousePos.y);
};

const getMousePosition = () => {
  return robot.getMousePos();
};

export { mouseUp, mouseDown, mouseLeft, mouseRight, getMousePosition };
