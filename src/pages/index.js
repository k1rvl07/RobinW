const pageModules = import.meta.glob('./*/index.js', { eager: true });

const pages = Object.keys(pageModules).reduce((acc, path) => {
  const pageName = path.replace('./', '').replace('/index.js', '');
  acc[pageName] = pageModules[path][pageName];
  return acc;
}, {});

export default pages;