import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import { cwd } from 'process';
import { printText, colorsCodes } from '../../utils/index.js';

const add = async (args) => {
  if (!args || !args.length) {
    printText('Operation failed: file name is required', colorsCodes.red);
    return;
  }
  const fileName = args[0];
  const filePath = resolve(cwd(), fileName);
  try {
    await writeFile(filePath, '', { flag: 'wx' });
    printText(`File created: ${fileName}`, colorsCodes.blue);
  } catch (error) {
    if (error.code === 'EEXIST') {
      printText(`Operation failed: file already exists`, colorsCodes.red);
    } else {
      printText(`Operation failed: ${error.message}`, colorsCodes.red);
    }
  }
};

export { add };
