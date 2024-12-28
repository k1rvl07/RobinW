const hookModules = import.meta.glob('./*/index.js', { eager: true });

const hooks = Object.keys(hookModules).reduce((acc, path) => {
  const hookName = path.replace('./', '').replace('/index.js', '');
  acc[hookName] = hookModules[path].default || hookModules[path][hookName];
  return acc;
}, {});

export default hooks;