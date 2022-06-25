import { inputObject } from "./types";

const getInput = (userinput: string): inputObject => {
  const array = userinput.split(" ");
  const inputObject = {
    command: array[0],
    value: Number(array[1]),
  };
  return inputObject;
};

export { getInput };
