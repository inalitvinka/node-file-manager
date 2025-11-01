import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output, chdir } from 'process';
import { homedir } from 'os';

import { welcomeUser, goodbyeUser } from './ui/index.js';
import { handleCommands } from './handleCommands.js';



const start = () => {
  chdir(homedir());
  const rl = createInterface({
    input,
    output,
  });

  welcomeUser();

  rl.prompt();
  
  rl.on('SIGINT', () => {
    goodbyeUser();
    process.exit(0);
  });
  
  rl.on('line', async (line) => {
    await handleCommands(line);
  });
};

export { start };
