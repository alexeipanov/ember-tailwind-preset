'use strict';

const { EOL } = require('os');
const appClass = 'EmberApp';
const addonClass = 'EmberAddon';
const appImport = `${appClass} = require('ember-cli/lib/broccoli/ember-app')`;
const addonImport = `${addonClass} = require('ember-cli/lib/broccoli/ember-addon')`;
const appTemplateFiles =
  "['./app/templates/**/*.hbs', './app/components/**/*.hbs']";

const addonTemplateFiles =
  "['./addon/components/**/*.hbs', './tests/dummy/app/templates/**/*.hbs', './tests/dummy/app/components/**/*.hbs']";

/* eslint-disable no-useless-escape */
const postcssOptions = `postcssOptions: {
      compile: {
        cacheInclude: [/.*\.(css|hbs)$/, /.tailwind\.config\.js$/],
        plugins: [
          {
            module: require('postcss-import'),
            options: {
              path: ['node_modules'],
            },
          },
          require('tailwindcss')('./tailwind.config.js'),
        ],
      },
    },`;
/* eslint-enable no-useless-escape */
const tailwind = `@tailwind base;
@tailwind components;
@tailwind utilities;
`;

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
    return this.addPackagesToProject([
      { name: 'tailwindcss', target: 'latest' },
      { name: 'autoprefixer', target: 'latest' },
    ])
      .then(() =>
        this.addAddonToProject({
          name: 'ember-cli-postcss',
          target: 'latest',
        }),
      )
      .then(() => {
        let cssPath = 'app/styles/app.css';
        if (this.project.isEmberCLIAddon()) {
          cssPath = 'tests/dummy/' + cssPath;
        }

        return this.insertIntoFile(cssPath, tailwind);
      })
      .then(() => {
        this.insertIntoFile(
          '.eslintrc.js',
          "        './postcss.config.js'," +
            EOL +
            "        './tailwind.config.js',",
          {
            after: "        './ember-cli-build.js'," + EOL,
          },
        );

        this.insertIntoFile(
          '.stylelintrc.js',
          '  rules: {' +
            EOL +
            "    'at-rule-no-unknown': [" +
            EOL +
            '      true,' +
            EOL +
            '      {' +
            EOL +
            "        ignoreAtRules: ['tailwind']," +
            EOL +
            '      },' +
            EOL +
            '    ],' +
            EOL +
            '  },',
          {
            after:
              "  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended']," +
              EOL,
          },
        );
      });
  },
};
