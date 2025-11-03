import { resolve, parse } from "path";
import { stat } from "fs/promises";
import { chdir, cwd } from "process";

import { colorsCodes, printText } from "../../utils/index.js";

const cd = async (args) => {
  try {
    if (!args || !args.length) {
      printText('Operation failed: path is required', colorsCodes.red);
    }
    const path = args[0];
    const absPath = resolve(cwd(), path);
    const stats = await stat(absPath);
    if (!stats.isDirectory()) {
      printText('Operation failed: not a directory', colorsCodes.red);
    }
    const { root } = parse(absPath);
    if (!absPath.startsWith(root)) {
      printText('Operation failed', colorsCodes.red);
    }
    chdir(absPath);
  } catch (error) {
    printText(`Operation failed: ${error.message}`, colorsCodes.red);
  }
}

export { cd };
