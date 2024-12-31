const dataModules = import.meta.glob("../../../data/**/*.js", { eager: true });

export const data = Object.keys(dataModules).reduce((acc, path) => {
  const module = dataModules[path];
  const exportNames = Object.keys(module);
  const componentName = exportNames[0];
  acc[componentName] = module[componentName] || module.default || module;

  return acc;
}, {});
