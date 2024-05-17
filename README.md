# ember-tailwind-preset

Ember configuration preset for TailwindCSS

[![Node.js Package](https://github.com/alexeipanov/ember-tailwind-preset/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/alexeipanov/ember-tailwind-preset/actions/workflows/npm-publish.yml)


## Compatibility

* Ember.js v4.8 or above
* Ember CLI v4.8 or above
* Node.js v18 or above


## Installation

```
ember install ember-tailwind-preset
```


## Usage

This plugin makes available TailwindCSS usage in your Ember.js project according to this official guide with PostCSS [guide](https://tailwindcss.com/docs/installation/using-postcss):

:white_check_mark: installs ember-cli-postcss addon;

:white_check_mark: installs tailwindcss, autoprefixer packages;

:white_check_mark: adds Tailwind directives to the main css file (app/styles/app.css or tests/dummy/app/styles/app.css);

:white_check_mark: creates tailwind.config.js and postcss.config.js files;

:white_check_mark: adds postcss options in the ember-cli-build.js file;

:white_check_mark: updates .eslintrc.js and .stylelintrc.js files.



## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
