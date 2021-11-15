/**
 * Convert a component's props definition to an options object for use
 * in the interactive example options section.
 *
 * @param  {Object} Component    A component options object
 * @param  {Array}  includeProps Array of props to include. Includes all props when empty.
 */
export function makeComponentOptions(Component, includeProps = []) {
    const options = {};

    Object.keys(Component.props).forEach(key => {
        if (includeProps.length > 0 && includeProps.indexOf(key) === -1) {
            return;
        }

        const prop = Component.props[key];
        const isOneOf = prop.$meta && prop.$meta.oneOf;

        const option = {
            type: isOneOf ? 'one-of' : prop.type,
            value: prop.default,
            prop,
        };

        if (isOneOf) {
            option.options = prop.$meta.oneOf;
        }

        options[key] = option;
    });

    return options;
}

/**
 * Convert a single prop definition to an option object for use
 * in the interactive example options section.
 *
 * @param  {Object} prop            The prop definition
 * @param  {String} defaultFallback The default value to use if the prop has no default
 */
export function propToOption(prop, defaultFallback = '') {
    const propDef =
        typeof prop === 'object' && !Array.isArray(prop)
            ? prop
            : { type: prop };

    if (
        propDef.type === String ||
        propDef.type === Number ||
        propDef.type === Boolean ||
        Array.isArray(propDef.type)
    ) {
        return {
            type: propDef.type,
            value: propDef.default || defaultFallback,
            prop: propDef,
        };
    } else {
        throw new Error('Unhandled prop type: ' + propDef.type);
    }
}
