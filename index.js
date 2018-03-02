'use strict';

module.exports = {
  name: 'ember-ethers',

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('node_modules/ethers/dist/ethers.js');
    app.import('vendor/shims/ethers.js');
  }
};
