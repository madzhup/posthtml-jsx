# PostHTML JSX SVG <img align="right" width="200" height="220" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">

Inspired by [posthtml-jsx](https://github.com/posthtml/posthtml-jsx), use [posthtml-svg-mode](https://github.com/kisenka/svg-baker/tree/master/packages/posthtml-svg-mode) render.

## Install

```bash
npm i -D posthtml-jsx-svg
```

## Usage

```js
posthtml(plugins)
  .process(html, { render: jsx(options) })
  .then(({ html }) => console.log(html))
```

## Options

**`render`:** `{Function}`: Custom render

**`name`:** `{String|Function}`: Name of the Component. If function passed, it will be called with this options and posthtml tree as arguments

**`props`:** `{String|Array}`: Props of the Component

## Example

```js
import { readFileSync, writeFileSync } from 'fs'

import posthtml from 'posthtml'
import jsx from 'posthtml-jsx-svg'

const html = readFileSync('./index.html', 'utf8')

posthtml()
  .process(html, {
    render: jsx({
      name: 'Test'
      props: ['prop', '{ prop }', '...props']
      export: true
    })
  })
  .then((result) => writeFileSync('./Test.jsx', result.html, 'utf8'))
```

```html
<div id={id} class={container}>
  {content}
</div>
```

```js
import React from 'react';

const SvgComponent = (...prop1, prop2) => (
<div id="{id}" class="{class}">
  {ctx.content}
</div>
);

export default SvgComponent;
```

## LICENSE

[MIT](LICENSE)
