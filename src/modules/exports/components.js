const componentModules = import.meta.glob("../../components/*/index.js", {
  eager: true,
});

export const components = Object.keys(componentModules).reduce((acc, path) => {
  const componentName = path
    .replace("../../components/", "")
    .replace("/index.js", "");
  acc[componentName] = componentModules[path][componentName];
  return acc;
}, {});
