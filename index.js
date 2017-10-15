const jsx = require('./lib/jsx');
const defaultRender = require('posthtml-render');

const defaultTemplate = (name, props, content) =>
`import React from 'react';

const ${name} = (${props}) => (
${content});

export default ${name};
`;

module.exports = (options) => {
  options = options || {};
  options.props = options.props || '...props';
  options.render = options.render || defaultRender;
  options.template = options.template || defaultTemplate;

  return function postHTMLJSX (tree) {
    return jsx(tree, options);
  };
}
