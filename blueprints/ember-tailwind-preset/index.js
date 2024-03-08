'use strict';

const appClass = 'EmberApp';
const addonClass = 'EmberAddon';
const appImport = `${appClass} = require('ember-cli/lib/broccoli/ember-app');`;
const addonImport = `${addonClass} = require('ember-cli/lib/broccoli/ember-addon');`;
const appTemplateFiles =
  "templateFiles: ['./app/templates/**/*.hbs', './app/components/**/*.hbs']";
const addonTemplateFiles =
  "templateFiles: ['./tests/dummy/app/templates/**/*.hbs', './tests/dummy/app/components/**/*.hbs']";
const postcssOptions = `postcssOptions: {
  compile: {
    plugins: [
      {
        module: require('postcss-import'),
        options: {
          path: ['node_modules'],
        },
      },
      require('tailwindcss')('./tailwind.config.js'),
    ]
  }
}`;

module.exports = {
  description: '',

  normalizeEntityName: function () {},

  locals(options) {
    let projectOptions;

    if (this.project.isEmberCLIAddon()) {
      projectOptions = {
        postcssOptions,
        class: addonClass,
        import: addonImport,
        templateFiles: addonTemplateFiles,
      };
    } else {
      projectOptions = {
        postcssOptions,
        class: appClass,
        import: appImport,
        templateFiles: appTemplateFiles,
      };
    }

    options.projectOptions = projectOptions;
    return options;
  },

  afterInstall() {
    return this.addAddonToProject({
      name: 'ember-cli-postcss',
      target: 'latest',
    });
  },
};
