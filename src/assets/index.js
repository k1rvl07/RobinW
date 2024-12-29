const imgModules = import.meta.glob('/src/assets/img/*.{png,jpg,jpeg,gif}', { eager: true });

const svgModules = import.meta.glob('/src/assets/svg/*.svg', { eager: true });

const imgImages = Object.keys(imgModules).reduce((images, path) => {
  const key = path.replace('/src/assets/img/', '').replace(/\.(png|jpe?g|gif)$/, '');
  images[key] = `.${imgModules[path].default}`;
  return images;
}, {});

const svgImages = Object.keys(svgModules).reduce((images, path) => {
  const key = path.replace('/src/assets/svg/', '').replace(/\.svg$/, '');
  images[key] = `.${svgModules[path].default}`;
  return images;
}, {});

export { imgImages, svgImages };