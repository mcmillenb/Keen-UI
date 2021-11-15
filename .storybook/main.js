module.exports = {
    stories: [ '../stories/**/*.stories.js' ],
    addons: [
        '@storybook/addon-links/register',
        './source-addon',
        '@storybook/preset-scss',
    ],
};
