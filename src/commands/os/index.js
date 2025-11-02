import { getEOL } from "./getEOL.js";
import { getCPUsInfo } from "./getCPUsInfo.js";
import { getHomeDir } from "./getHomeDir.js";
import { getCurSysUsername } from "./getCurSysUsername.js";
import { getArchitecture } from "./getArchitecture.js"
import { colorsCodes, printText } from "../../utils/index.js";

const commands = {
  '--EOL': getEOL,
  '--cpus': getCPUsInfo,
  '--homedir': getHomeDir,
  '--username': getCurSysUsername,
  '--architecture': getArchitecture,
};

const osCommandsHandler = (args) => {
    const command = args.join(' ');
    const handleOs = commands[command];
    if (!handleOs) {
        printText(`Operation failed`, colorsCodes.red);
    }
    handleOs();
};

export { osCommandsHandler };
