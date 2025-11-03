import { goodbyeUser } from "./ui/index.js";

const exit = () => {
  goodbyeUser();
  process.exit(0);
}

export { exit };
