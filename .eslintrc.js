module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jsdoc/recommended',
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
    project: './tsconfig.json',
    tsconfigRootDir: './',
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      impliedStrict: true,
    },
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

    // jsdoc
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/no-undefined-types': [
      'warn',
      {
        definedTypes: ['never'],
      },
    ],

    // JS requirements
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',

    // @TODO
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    jsdoc: {
      // mode: 'typescript',
      tagNamePreference: {
        param: 'param',
        returns: 'return',
      },
    },
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
