import { createReadStream } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import { pipeline } from 'stream/promises';
import { stdout } from 'process';
import { EOL } from 'os';
import { lstat } from 'fs/promises';

import { printText, colorsCodes } from '../../utils/index.js';

const cat = async (args) => {
  if (!args || !args.length) {
    printText('Operation failed: path is required', colorsCodes.red);
    return;
  }
  const path = args.join(' ');
  try {
    const absPath = resolve(cwd(), path);
    console.log('Resolved path:', absPath);
    const stats = await lstat(absPath);

    if (!stats.isFile()) {
      printText('Operation failed: path is required', colorsCodes.red);
      return;
    }
    const stream = createReadStream(absPath, { encoding: 'utf-8' });
    await pipeline(stream, stdout, { end: false });
    stdout.write(EOL);
  } catch (error) {
    printText(`Operation failed: ${error.message}`, colorsCodes.red);
  }
}

export { cat };
