import { osCommandsHandler as os } from "./os/index.js";
import { commands as nwdCommands } from "./nwd/index.js";
import { commands as filesCommands} from "./files/index.js";
import { exit } from '../core/exit.js';

const commands = {
  '.exit': exit,
  os,
  ...nwdCommands,
  ...filesCommands,
}

export { commands };
