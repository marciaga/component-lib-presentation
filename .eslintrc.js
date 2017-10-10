module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      destructuring: true,
      jsx: true
    }
  },
  env: {
      node: true,
      browser: true,
  },
  extends: ['airbnb'],
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    'global-require': 0,
    'consistent-return': ['error', { 'treatUndefinedAsUnspecified': true }],
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    'import/extensions': [
      2, {
        js: 'never',
        json: 'always',
      }
    ],
    'no-restricted-syntax': [
      0, {
        selector: 'ForInStatement',
        message: 'Don\'t use ForInStatements'
      }
    ],
    'no-restricted-properties': [
      0, {
        object: Math,
        property: 'pow',
      }
    ],
    'import/no-unresolved': [
      2, {
        ignore: ['recharts']
      }
    ],
    'no-extend-native': [
      2, {
        'exceptions': ['Map']
      }
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': 0,
    'no-unused-expressions': 0,
    'import/no-dynamic-require': 0,
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-param-reassign': [
      2, {
        props: true,
        ignorePropertyModificationsFor: ['prev','memo', 'key', 'req', 'arr']
      }
    ],
    'no-return-assign': 0, // we use these for refs
    // React
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/sort-comp': 1,
    // JSX
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/tabindex-no-positive': 0,
    'jsx-a11y/media-has-caption': 0,
    // TODO @ma:these are rules we should change to "error" once corrected
    'no-mixed-operators': 1,
    'no-use-before-define': 1,
    'no-underscore-dangle': 1,
    'no-dupe-keys': 1,
    'no-multi-assign': 1,
    'max-len': 1,
    'no-case-declarations': 1,
    eqeqeq: 1,
    'consistent-return': 1,
    'class-methods-use-this': 1,
    'no-useless-escape': 1,
    'no-alert': 1,
    // React rules to fix and change to error:
    'react/no-unused-prop-types': 1,
    'react/no-find-dom-node': 1,
    'react/no-string-refs': 1,
    'react/jsx-no-bind': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-children-prop': 1,
    'react/no-array-index-key': 0,
  },
  globals: {
    afterEach: true,
    describe: true,
    expect: true,
    it: true,
    jest: true,
    test: true
  }
};
