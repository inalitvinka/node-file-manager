import { colorsCodes, getUsername, printText } from '../../utils/index.js';

const goodbyeUser = () => {
  const username = getUsername();
  const text = `Thank you for using File Manager, ${username}, goodbye!`;
  printText(text, colorsCodes.cyan);
}

export { goodbyeUser };
