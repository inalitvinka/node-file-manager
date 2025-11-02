import { osCommandsHandler as os } from './os/index.js';
import { commands as nwdCommands } from './nwd/index.js';
import { commands as filesCommands} from './files/index.js';
import { hash } from './hash/hash.js';
import { commands as zipCommands } from './zip/index.js';

import { exit } from '../core/exit.js';

const commands = {
  '.exit': exit,
  os,
  ...nwdCommands,
  ...filesCommands,
  hash,
  ...zipCommands,
}

export { commands };
