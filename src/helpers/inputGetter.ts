import { inputObject } from "./types";

const getInput = (userinput: string): inputObject => {
  const array = userinput.split(" ");
  if (array.length < 3) {
    const inputObject = {
      command: array[0],
      value: Number(array[1]),
    };
    return inputObject;
  } else {
    const inputObject = {
      command: array[0],
      value: Number(array[1]),
      value2: Number(array[2]),
    };
    return inputObject;
  }
};

export { getInput };
