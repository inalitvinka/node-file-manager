import { printCurrentDir, printText, colorsCodes } from '../utils/index.js';
import { exit } from './exit.js';
import { osCommands, nwdCommands } from '../commands/index.js';

const commands = {
  '.exit': exit,
  ...osCommands,
  ...nwdCommands,
}

const handleCommands = async (line) => {
  // console.log(line);
  const normalizedLine = line.trim().replace(/\s+/g, ' ');
  try {
    let command = commands[normalizedLine];
    if (command) {
      await command();
    } else {
      const [baseCommand, ...args] = normalizedLine.split(' ');
      command = commands[baseCommand];
      if (command) {
        await command(...args);
      } else {
        printText('\n Invalid input', colorsCodes.red);
      }
    }
  } catch (error) {
    printText(`Operation failed: ${error.message}`, colorsCodes.red);
  } finally {
    printCurrentDir();
  }
}

export { handleCommands };
