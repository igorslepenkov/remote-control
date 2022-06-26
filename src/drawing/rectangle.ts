import {
  mouseRight,
  mouseDown,
  mouseLeft,
  mouseUp,
} from "../navigation/navigation.js";

const drawRectangle = (width: number, length: number) => {
  mouseRight(width);
  mouseDown(length);
  mouseLeft(width);
  mouseUp(length);
};

export { drawRectangle };
