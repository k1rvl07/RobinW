const dataModules = import.meta.glob('../../data/*.js', { eager: true });

export const data = Object.keys(dataModules).reduce((acc, path) => {
  const module = dataModules[path];
  Object.assign(acc, module);
  return acc;
}, {});