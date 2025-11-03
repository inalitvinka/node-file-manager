import { printText, colorsCodes } from '../../utils/index.js';

const getArchitecture = () => {
  const text = `\n CPU architecture: ${process.arch}`;
  printText(text, colorsCodes.green);
}

export { getArchitecture };
