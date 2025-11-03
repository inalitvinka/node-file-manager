import { rename, lstat } from 'fs/promises';
import { dirname, join, isAbsolute } from 'path';
import { cwd } from 'process';
import { printText, colorsCodes } from '../../utils/index.js';


const rn = async (args) => {
  const ARGS_REQUIREMENTS = 2;
  if (!args || args.length < ARGS_REQUIREMENTS) {
    printText('Operation failed: path and new file name are required', colorsCodes.red);
    return;
  }

  const [oldPathInput, ...newNameParts] = args;
  const newFileName = newNameParts.join(' ');

  const oldPath = isAbsolute(oldPathInput) ? oldPathInput : join(cwd(), oldPathInput);
  const newPath = join(dirname(oldPath), newFileName);

  try {
    const stats = await lstat(oldPath);
    if (!stats.isFile()) {
      printText('Operation failed: it is not a file', colorsCodes.red);
      return;
    }

    await rename(oldPath, newPath);
    printText(`File renamed to: ${newFileName}`, colorsCodes.magenda);
  } catch (error) {
    if (error.code === 'ENOENT') {
      printText('Operation failed: file does not exist', colorsCodes.red);
    } else {
      printText(`Operation failed: ${error.message}`, colorsCodes.red);
    }
  }
};

export { rn };