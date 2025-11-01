import { EOL } from 'os';
import { colorsCodes } from './index.js';

const printText = (text, color = colorsCodes.reset) => {
  const coloredText = `${color}${text}${colorsCodes.reset}${EOL}${EOL}`;
  process.stdout.write(coloredText);
}

export { printText };
