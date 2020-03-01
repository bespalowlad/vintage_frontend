module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'max-len': 'off',
        'no-param-reassign': 'warn',
        'no-unused-vars': 'warn',
        'linebreak-style': 'off',
        indent: ['warn', 4],
        'class-methods-use-this': 'off',
        quotes: [2, 'single', { avoidEscape: true }],
    },
};
