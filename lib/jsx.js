function props (props) {
  if (Array.isArray(props)) {
    return props.join(', ')
  }
  return props
}

module.exports = function jsx (tree, options) {
  const render = options.render;
  const name = typeof options.name === 'function' ? options.name(options, tree) : options.name;

  const output =
`import React from 'react';

const ${name} = (${props(options.props)}) => (
${render(tree)});

export default ${name};
`;

  return output;
}
