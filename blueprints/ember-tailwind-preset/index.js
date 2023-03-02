'use strict';

module.exports = {
  description: '',

  normalizeEntityName: function () {},

  afterInstall() {
    return this.addAddonToProject({
      name: 'ember-cli-postcss',
      target: 'latest',
    });
  },
};
