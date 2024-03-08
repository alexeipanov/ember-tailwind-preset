'use strict';

const <%= projectOptions.import %>;

module.exports = function (defaults) {
  let app = new <%= projectOptions.class %>(defaults, {
    <%= projectOptions.postcssOptions %>
  });

  return app.toTree();
};
