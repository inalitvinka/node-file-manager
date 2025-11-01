import { cpus } from 'os';

const getCPUsInfo = () => {
  const cpusInf = cpus();
  const cpuInf = cpusInf.map((item, index) => ({
    CPU: `CPU${index + 1}`,
    Model: item.model,
    'Clock Rate': (item.speed / 1000).toFixed(3) + ' ' + 'GHz',
  }));

  console.table(cpuInf); 
}

export { getCPUsInfo };
