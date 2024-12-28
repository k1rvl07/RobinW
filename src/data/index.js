const dataModules = import.meta.glob('./*.js', { eager: true });

const data = Object.keys(dataModules).reduce((acc, path) => {
  const module = dataModules[path];
  Object.assign(acc, module);
  return acc;
}, {});


export { data };