import { createReadStream } from 'fs';
import { join, isAbsolute } from 'path';
import { cwd } from 'process';
import { createHash } from 'crypto';
import { pipeline } from 'stream/promises';
import { printText, colorsCodes } from '../../utils/index.js';

const HASH_ALGO = 'sha256';
const OUTPUT_FORMAT = 'hex';

const hash = async (args) => {
  if (!args || !args.length) {
    printText('Operation failed: path is required', colorsCodes.red);
    return;
  }
  const fileInput = args.join(' ');
  const filePath = isAbsolute(fileInput) ? fileInput : join(cwd(), fileInput);
  const hash = createHash(HASH_ALGO);
  try {
    await pipeline(createReadStream(filePath), hash);
    const result = hash.digest(OUTPUT_FORMAT);
    printText(`Hash: ${result}`, colorsCodes.magenda);
  } catch (error) {
    printText(`Operation failed: ${error.message}`, colorsCodes.red);
  }
};

export { hash };
