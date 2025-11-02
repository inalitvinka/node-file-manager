import { rm as remove } from "fs/promises";
import { resolve, isAbsolute } from "path";
import { cwd } from "process";
import { printText, colorsCodes } from "../../utils/index.js";

const rm = async (args) => {
  if (!args || !args.length) {
    printText("Operation failed: path is required", colorsCodes.red);
    return;
  }

  const filePathInput = args.join(' ');
  const filePath = isAbsolute(filePathInput) ? filePathInput : resolve(cwd(), filePathInput);

  try {
    await remove(filePath);
    printText(`File deleted: ${filePathInput}`, colorsCodes.magenda);
  } catch (error) {
    if (error.code === "ENOENT") {
      printText("Operation failed: file does not exist", colorsCodes.red);
    } else {
      printText(`Operation failed: ${error.message}`, colorsCodes.red);
    }
  }
};

export { rm };
