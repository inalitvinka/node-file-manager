import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { join, basename, isAbsolute } from 'path';
import { cwd } from 'process';
import { pipeline } from 'stream/promises';
import { printText, colorsCodes } from '../../utils/index.js';

const compress = async (args) => {
  const ARGS_REQUIREMENTS = 2;
  if (!args || args.length < ARGS_REQUIREMENTS) {
    printText('Operation failed: src and dest paths are required', colorsCodes.red);
    return;
  }

  const [srcInput, destInput] = args;

  const srcPath = isAbsolute(srcInput) ? srcInput : join(cwd(), srcInput);
  const destDir = isAbsolute(destInput) ? destInput : join(cwd(), destInput);
  const destPath = join(destDir, `${basename(srcPath)}.br`);

  try {
    await pipeline(
      createReadStream(srcPath),
      createBrotliCompress(),
      createWriteStream(destPath)
    );

    printText(`File compressed to: ${destPath}`, colorsCodes.magenda);
  } catch (error) {
    printText(`Operation failed: ${error.message}`, colorsCodes.red);
  }
};

export { compress };
