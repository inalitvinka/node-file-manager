import { createInterface } from 'readline';

import { welcomeUser, goodbyeUser } from './ui/index.js';


const start = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>',
  });

  welcomeUser();

  rl.prompt();
  
  rl.on('SIGINT', () => {
    goodbyeUser();
    process.exit(0);
  });  
};

export { start };
