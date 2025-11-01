import { EOL } from 'os';

import { printText, colorsCodes } from '../../utils/index.js';

const getEOL = () => {
  const text = `Default system End-Of-Line: ${JSON.stringify(EOL)}`;
  printText(text, colorsCodes.green);
}

export { getEOL };
