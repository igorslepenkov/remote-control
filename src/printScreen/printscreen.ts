import robot from "robotjs";
import Jimp from "jimp";

const printScreen = async () => {
  const mousePos = robot.getMousePos();

  const img = robot.screen.capture(mousePos.x, mousePos.y, 200, 200);

  const jimp = new Jimp({ data: img.image, width: 200, height: 200 });

  const base64 = await (
    await jimp.getBase64Async(Jimp.MIME_PNG)
  ).replace("data:image/png;base64,", "");

  const pngBuffer = await jimp.getBufferAsync(Jimp.MIME_PNG);

  const imageObject = {
    base64,
    pngBuffer,
  };
  return imageObject;
};

export { printScreen };
