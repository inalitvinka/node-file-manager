import { colorsCodes, getUsername, printText, printCurrentDir } from '../../utils/index.js';

const welcomeUser = () => {
  const username = getUsername();
  const text = `Welcome to the File Manager, ${username}!`;
  printText(text, colorsCodes.cyan);
  printCurrentDir();
}

export { welcomeUser };
