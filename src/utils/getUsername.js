import { UNKNOWN_USERNAME } from '../utils/index.js';

const getUsername = () => {
  const args = process.argv.slice(2);
  const argName = '--username=';
  const usernameArg = args.find(arg => arg.startsWith(argName));
  const username = usernameArg 
    ? usernameArg.split('=')[1] || UNKNOWN_USERNAME
    : UNKNOWN_USERNAME;
  return username;
}

export { getUsername };
