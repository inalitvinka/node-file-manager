import { printCurrentDir, printText, colorsCodes } from '../utils/index.js';
import { exit } from './exit.js';
import { osCommands } from '../commands/index.js';

const commands = {
  '.exit': exit,
  ...osCommands,
}

const handleCommands = async (line) => {
  // console.log(line);
  const normalizedLine = line.trim().replace(/\s+/g, ' ');
  const command = commands[normalizedLine];
  try {
    if (!command) {
      printText('\n Invalid input', colorsCodes.red);
    }
    if (command && command instanceof Promise) {
      await command();
    }
    if (command && !(command instanceof Promise)) {
      command();
    }
  } catch (error) {
    console.error('Operation failed', error);
  } finally {
    printCurrentDir();
  }
}

export { handleCommands };
