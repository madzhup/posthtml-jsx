const jsx = require('./lib/jsx');
const defaultRender = require('posthtml-render');

module.exports = (options) => {
  options = options || {};
  options.props = options.props || '...props';
  options.render = options.render || defaultRender;

  return function postHTMLJSX (tree) {
    return jsx(tree, options);
  };
}
