module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/recommended', '@vue/prettier'],
    rules: {
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'prettier/prettier': [
            'warn',
            {
                singleQuote: true,
                semi: true,
                trailingComma: 'es5',
            },
        ],
        'vue/require-default-prop': 'off', // TODO: enable this later
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['Basic', 'Example', 'Dismissible', 'Persistent', 'Disabled'],
            },
        ],
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
};
