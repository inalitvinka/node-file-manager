import { printCurrentDir, printText, colorsCodes } from '../utils/index.js';
import { commands } from '../commands/index.js';


const handleCommands = async (line) => {
  const normalizedLine = line.trim().replace(/\s+/g, ' ');
  const [command, ...rest] = normalizedLine.split(' ');
  const handleCommand = commands[command];
  try {
    if (handleCommand) {
      printText(`\n Running command: ${command} ${rest.join(' ')}`, colorsCodes.magenda);
      await handleCommand(rest);
    } else {
      printText('\n Invalid input', colorsCodes.red);
    }
  } catch (error) {
    printText(`Operation failed: ${error.message}`, colorsCodes.red);
  } finally {
    printCurrentDir();
  }
}

export { handleCommands };
