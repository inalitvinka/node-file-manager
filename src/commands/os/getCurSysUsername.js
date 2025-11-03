import { userInfo } from 'os';

import { printText, colorsCodes } from '../../utils/index.js';

const getCurSysUsername = () => {
  const text = `\n Current system username: ${userInfo().username}`;
  printText(text, colorsCodes.green);
}

export { getCurSysUsername };
