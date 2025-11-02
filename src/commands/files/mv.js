import { cp } from './cp.js';
import { join, isAbsolute } from 'path';
import { cwd } from 'process';
import { lstat, rm } from 'fs/promises';
import { printText, colorsCodes } from '../../utils/index.js';

const mv = async (args) => {
  if (!args || args.length < 2) {
    printText('Operation failed: paths are required', colorsCodes.red);
    return;
  }
  const [srcInput, destInput] = args;
  const srcPath = isAbsolute(srcInput) ? srcInput : join(cwd(), srcInput);
  const destDir = isAbsolute(destInput) ? destInput : join(cwd(), destInput);

  try {
    const stats = await lstat(srcPath);
    if (!stats.isFile()) return;
    await cp([srcPath, destDir]);
    await rm(srcPath); 
    printText('File deleted from the source', colorsCodes.magenda);
  } catch (error) {
    printText(`Operation failed: ${error.message}`, colorsCodes.red);
  }
};

export { mv };
