module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'google',
    'prettier',
  ],
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      impliedStrict: true,
    },
    sourceType: 'module',
  },
  globals: {
    strapi: true,
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-console':
      process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger':
      process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-curly-spacing': 'off',
    'valid-jsdoc': 'off',
    'max-len': 'off',
    'require-jsdoc': 'off',
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      pragma: 'React', // Pragma to use, default to "React"
      fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      flowVersion: '0.53', // Flow version
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
    ],
    componentWrapperFunctions: [
      'observer',
      { property: 'styled' },
      { property: 'observer', object: 'Mobx' },
      { property: 'observer', object: '<pragma>' },
    ],
    linkComponents: [
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],
  },
};
