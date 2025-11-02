import { mkdir as makeDir } from 'fs/promises';
import { join } from 'path';
import { cwd } from 'process';
import { printText, colorsCodes } from '../../utils/index.js';

const mkdir = async (args) => {
  if (!args || !args.length) {
    printText('Operation failed: directory name is required', colorsCodes.red);
    return;
  }

  const dirName = args.join(' ');
  const dirPath = join(cwd(), dirName);

  try {
    await makeDir(dirPath, { recursive: false });
    printText(`Directory ${dirName} created`, colorsCodes.magenda);
  } catch (error) {
    if (error.code === 'EEXIST') {
      printText('Operation failed: directory already exists', colorsCodes.red);
    } else {
      printText(`Operation failed: ${error.message}`, colorsCodes.red);
    }
  }
};

export { mkdir };
