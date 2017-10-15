function props (props) {
  if (Array.isArray(props)) {
    return props.join(', ')
  }
  return props
}

module.exports = function jsx (tree, options) {
  const render = options.render;
  const template = options.template;
  const name = typeof options.name === 'function' ? options.name(options, tree) : options.name;

  return template(name, props(options.props), render(tree));
}
