const React = require('react');
const { addons, types } = require('@storybook/addons');
const { useParameter } = require('@storybook/api');
const { AddonPanel } = require('@storybook/components');
const { SyntaxHighlighter } = require('@storybook/components');

const ADDON_ID = 'vueStorySource';
const PARAM_KEY = 'source';
const PANEL_ID = `${ADDON_ID}/panel`;

const SourcePanel = ({ active }) => {
    const source = useParameter(PARAM_KEY, null);
    return active && source
        ? React.createElement(
              SyntaxHighlighter,
              {
                  language: 'html',
                  showLineNumbers: false,
                  copyable: true,
                  padded: true,
                  format: false,
              },
              source
          )
        : null;
};

addons.register(ADDON_ID, () => {
    const render = ({ active, key }) =>
        React.createElement(
            AddonPanel,
            { active, key },
            React.createElement(SourcePanel, { active })
        );

    addons.add(PANEL_ID, {
        type: types.PANEL,
        title: 'Source',
        render,
        paramKey: PARAM_KEY,
    });
});
