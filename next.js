/**
 * Contains the next config.
 * @author Nico Hülscher
 */
'use strict';

module.exports = {
  extends: [
    '@the-arc-gmbh/eslint-config',
    'plugin:react/recommended',
    'plugin:@next/eslint-plugin-next',
    'next/core-web-vitals',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    "plugin:prettier/recommended",
  ],
  plugins: ['@next/eslint-plugin-next', 'react'],
  rules: {
    'react-in-jsx-scope': 'off'
  }
};
