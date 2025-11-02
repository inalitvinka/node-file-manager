import { readdir, stat } from 'fs/promises';
import { cwd } from 'process';

import { printText, colorsCodes } from '../../utils/index.js';

const ls = async () => {
  try {
    const currentDir = cwd();
    console.log('cur dir:', currentDir);
    const items = await readdir(currentDir, { withFileTypes: true });
    const folders = [];
    const files = [];
    items.forEach((item) => {
      if (item.isDirectory()) {
        folders.push(item.name);
      } else if (item.isFile()) {
        files.push(item.name);
      }
    });
    folders.sort((a, b) => a.localeCompare(b));
    files.sort((a, b) => a.localeCompare(b));
    const output = [
      ...folders.map((item) => ({ Name: item, Type: 'directory' })),
      ...files.map((item) => ({ Name: item, Type: 'file' })),
    ];
    console.table(output);
  } catch (error) {
    printText(`Operation failed: ${error.message}`, colorsCodes.red);
  }
}

export { ls };
