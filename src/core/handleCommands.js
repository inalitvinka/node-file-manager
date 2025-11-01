import { goodbyeUser } from './ui/index.js';

const commands = {
  '.exit': () => {
    goodbyeUser();
    process.exit(0);
  }
}

const handleCommands = async (line) => {
  console.log(line);
  const command = commands[line];
  try {
    if (command && command instanceof Promise) {
      await command();
    }
    if (command && !(command instanceof Promise)) {
      await command();
    }
  } catch (error) {
    console.error(error);
  }
}

export { handleCommands };
