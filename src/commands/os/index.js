import { getEOL } from "./getEOL.js";
import { getCPUsInfo } from "./getCPUsInfo.js";
import { getHomeDir } from "./getHomeDir.js";
import { getCurSysUsername } from "./getCurSysUsername.js";
import { getArchitecture } from "./getArchitecture.js"

export const commands = {
  'os --EOL': getEOL,
  'os --cpus': getCPUsInfo,
  'os --homedir': getHomeDir,
  'os --username': getCurSysUsername,
  'os --architecture': getArchitecture,
};
