const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: <%= projectOptions.templateFiles %>,
  theme: { ...defaultTheme },
};
