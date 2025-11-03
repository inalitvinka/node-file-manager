import { createReadStream, createWriteStream } from 'fs';
import { join, isAbsolute, basename } from 'path';
import { cwd } from 'process';
import { lstat } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { printText, colorsCodes } from '../../utils/index.js';

const cp = async (args) => {
  if (!args || args.length < 2) {
    printText('Operation failed: paths are required', colorsCodes.red);
    return;
  }

  const [srcInput, destInput] = args;

  const srcPath = isAbsolute(srcInput) ? srcInput : join(cwd(), srcInput);
  const destDir = isAbsolute(destInput) ? destInput : join(cwd(), destInput);

  try {
    const stats = await lstat(srcPath);
    if (!stats.isFile()) {
      printText('Operation failed: it is not a file', colorsCodes.red);
      return;
    }
    const destPath = join(destDir, basename(srcPath));
    await pipeline(createReadStream(srcPath), createWriteStream(destPath));
    printText(`File copied`, colorsCodes.magenda);
  } catch (error) {
    if (error.code === 'ENOENT') {
      printText('Operation failed: source or destination does not exist', colorsCodes.red);
    } else {
      printText(`Operation failed: ${error.message}`, colorsCodes.red);
    }
  }
};

export { cp };
