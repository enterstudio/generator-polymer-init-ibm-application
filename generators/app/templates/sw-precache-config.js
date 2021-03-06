/**
 * @license
 * Copyright (c) 2016 The IBM Research authors. All rights reserved.
 * This code may only be used under the MIT style license found at https://ibmresearch.github.io/LICENSE.txt
 * The complete set of authors may be found at https://ibmresearch.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://ibmresearch.github.io/CONTRIBUTORS.txt
 */

/* eslint-env node */

module.exports = {
  staticFileGlobs: [
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
    '/images/**/*',
    '/index.html',
    '/manifest.json'
  ],
  navigateFallback: '/index.html'
};
