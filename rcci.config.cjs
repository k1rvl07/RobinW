/**
 * @type import("reactcci/build/types").Config
 */
module.exports = {
  multiProject: false /* Enable searching projects with component folder path */,
  skipFinalStep: false /* Toggle final step agreement */,
  checkExistenceOnCreate: false /* Enable check folder for components which can be replaced */,
  folderPath: [
    "src/components",
    "src/pages",
    "src/hooks",
  ] /* Destination path or array of paths to create components */,
  templatesFolder: "templates" /* Folder with templates */,
  templates: [
    {
      name: "component",
      files: {
        /* Component folder structure declaration */
        index: {
          name: "index.js",
          file: "index.tmp",
        },
        component: {
          name: "[name].jsx",
          file: [
            { name: "fc.tmp", description: "Functional component" },
            { name: "class.tmp", description: "Class component" },
          ],
        },
        style: {
          name: "[name].module.css",
          optional: true,
          default: false,
        },
        stories: {
          name: "[name].stories.tsx",
          file: "stories.tmp",
          optional: true,
          default: false,
        },
        test: {
          name: "[name].test.tsx" /*'__tests__/[name].test.tsx' to put tests into subfolder*/,
          file: "test.tmp",
          optional: true,
          default: false,
        },
      },
    },
  ],
  placeholders: {
    /* Template placeholders */
    NAME: ({ componentName }) => componentName,
    COMPONENT_FILE_PREFIX: ({ filePrefix }) => filePrefix,
    STYLE: ({ files }) => (files.style ? `import styles from './${files.style.name}';\n` : ""),
    STORY_PATH: ({ join, project, destinationFolder, componentName }) =>
      join(project, destinationFolder, componentName),
  },
};
