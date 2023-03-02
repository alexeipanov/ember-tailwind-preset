const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/templates/**/*.hbs', './app/components/**/*.hbs'],
  theme: { ...defaultTheme },
};
