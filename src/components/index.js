const componentModules = import.meta.glob('./*/index.js', { eager: true });

const components = Object.keys(componentModules).reduce((acc, path) => {
  const componentName = path.replace('./', '').replace('/index.js', '');
  acc[componentName] = componentModules[path][componentName];
  return acc;
}, {});

export default components;