import { printCurrentDir, printText, colorsCodes } from '../utils/index.js';
import { commands } from '../commands/index.js';


const handleCommands = async (line) => {
  const normalizedLine = line.trim().replace(/\s+/g, ' ');
  const [command, ...rest] = normalizedLine.split(' ');
  const handleCommand = commands[command];
  try {
    if (handleCommand) {
      console.log(`Executing command: ${command} ${rest.join(' ')}`);
      console.log(rest);
      await handleCommand(rest);
    }
  } catch (error) {
    printText(`Operation failed: ${error.message}`, colorsCodes.red);
  } finally {
    printCurrentDir();
  }
}

export { handleCommands };
