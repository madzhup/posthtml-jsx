const test = require('ava')

const { join } = require('path')
const { readFileSync, writeFileSync } = require('fs')

const fixtures = (file) => readFileSync(join(__dirname, 'fixtures', file), 'utf8')
const expected = (file) => readFileSync(join(__dirname, 'expect', file), 'utf8')

const posthtml = require('posthtml')
const jsx = require('..')

test('Static name', (t) => {
  return posthtml()
    .process(
      fixtures('index.html'), {
        render: jsx({
          name: 'SvgComponent',
          props: ['...prop1', 'prop2'],
        })
      }
    )
    .then((result) => {
      // writeFileSync('./expect/SvgComponent.jsx', result.html, 'utf8')
      t.is(expected('SvgComponent.jsx'), result.html)
    })
})

test('Dynamic name', (t) => {
  return posthtml()
    .process(
      fixtures('index.html'), {
        render: jsx({
          name: (opts, tree) => tree.options.from,
          props: ['...prop1', 'prop2'],
        }),
        from: 'SvgComponent'
      }
    )
    .then((result) => {
      // writeFileSync('./expect/SvgComponent.jsx', result.html, 'utf8')
      t.is(expected('SvgComponent.jsx'), result.html)
    })
})
