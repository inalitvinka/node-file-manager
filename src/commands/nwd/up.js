import { dirname, parse } from 'path';
import { cwd, chdir } from 'process';

const up = () => {
  const currentPath = cwd();
  const { root } = parse(currentPath);
  if (currentPath !== root) {
    chdir(dirname(currentPath));
  }
}

export { up };
