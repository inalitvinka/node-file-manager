import { createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { join, basename, isAbsolute, extname } from 'path';
import { cwd } from 'process';
import { pipeline } from 'stream/promises';
import { printText, colorsCodes } from '../../utils/index.js';

const decompress = async (args) => {
  const ARGS_REQUIREMENTS = 2;
  if (!args || args.length < ARGS_REQUIREMENTS) {
    printText('Operation failed: src and dest paths are required', colorsCodes.red);
    return;
  }

  const [srcInput, destInput] = args;

  const srcPath = isAbsolute(srcInput) ? srcInput : join(cwd(), srcInput);
  const destDir = isAbsolute(destInput) ? destInput : join(cwd(), destInput);

  const baseName = basename(srcPath, extname(srcPath));
  const destPath = join(destDir, baseName);

  try {
    await pipeline(
      createReadStream(srcPath),
      createBrotliDecompress(),
      createWriteStream(destPath)
    );

    printText(`File decompressed to: ${destPath}`, colorsCodes.magenda);
  } catch (error) {
    printText(`Operation failed: ${error.message}`, colorsCodes.red);
  }
};

export { decompress };
