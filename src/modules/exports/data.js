const dataModules = import.meta.glob('../../data/**/*.js', { eager: true });

export const data = Object.keys(dataModules).reduce((acc, path) => {
  const module = dataModules[path];
  const exportNames = Object.keys(module);
  const componentName = exportNames[0];
  if (!componentName) {
    const parts = path.split('/');
    const fileName = parts[parts.length - 1].replace('.js', '');
    const fileKey = fileName.charAt(0).toUpperCase() + fileName.slice(1);
    acc[fileKey] = module.default || module;
    return acc;
  }
  acc[componentName] = module[componentName] || module.default || module;
  
  return acc;
}, {});