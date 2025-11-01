import { homedir } from 'os';

import { printText, colorsCodes } from '../../utils/index.js';

const getHomeDir = () => {
  const text = `\n Home directory: ${homedir()}`;
  printText(text, colorsCodes.green);
}

export { getHomeDir };
