import { cwd } from 'process';
import { colorsCodes, printText } from './index.js';

const printCurrentDir = () => {
  const currentDir = cwd();
  const text = `You are currently in ${currentDir}`;
  printText(text, colorsCodes.grey);
}

export { printCurrentDir };
