const imgModules = import.meta.glob("../../../assets/img/*.{png,jpg,jpeg,gif}", {
  eager: true,
});
const svgModules = import.meta.glob("../../../assets/svg/*.svg", { eager: true });

export const imgImages = Object.keys(imgModules).reduce((images, path) => {
  const key = path.replace("../../../assets/img/", "").replace(/\.(png|jpe?g|gif)$/, "");
  images[key] = imgModules[path].default;
  return images;
}, {});

export const svgImages = Object.keys(svgModules).reduce((images, path) => {
  const key = path.replace("../../../assets/svg/", "").replace(/\.svg$/, "");
  images[key] = svgModules[path].default;
  return images;
}, {});
