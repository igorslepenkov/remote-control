import {
  mouseRight,
  mouseDown,
  mouseLeft,
  mouseUp,
} from "../navigation/navigation.js";

const drawSquare = (width: number) => {
  mouseRight(width);
  mouseDown(width);
  mouseLeft(width);
  mouseUp(width);
};

export { drawSquare };
