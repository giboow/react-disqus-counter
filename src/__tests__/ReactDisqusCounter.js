import test from 'ava'
import React from 'react'
import { createRenderer, renderIntoDocument } from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import ReactDisqusCounter from '../ReactDisqusCounter'

test('Should render non-link element with no default content', t => {
  const renderer = createRenderer()
  renderer.render(
    <ReactDisqusCounter shortname='test' url='/' />
  )
  expect(renderer.getRenderOutput()).toEqualJSX(
    <span className={['disqus-comment-count']} data-disqus-url='/' />
  )
})

test('Should render non-link element with content', t => {
  const renderer = createRenderer()
  renderer.render(
    <ReactDisqusCounter shortname='test' url='/' >
      <span>{'My Content'}</span>
    </ReactDisqusCounter>
  )
  expect(renderer.getRenderOutput()).toEqualJSX(
    <span className={['disqus-comment-count']} data-disqus-url='/'>
      <span>{`My Content`}</span>
    </span>
  )
})

test('Should render link element with no default content', t => {
  const renderer = createRenderer()
  renderer.render(
    <ReactDisqusCounter shortname='test' url='/' isLink />
  )
  expect(renderer.getRenderOutput()).toEqualJSX(
    <a href='/#disqus_thread' />
  )
})

test('Should render link element with content', t => {
  const renderer = createRenderer()
  renderer.render(
    <ReactDisqusCounter shortname='test' url='/' isLink >
      <span>{`My Content`}</span>
    </ReactDisqusCounter>
  )
  expect(renderer.getRenderOutput()).toEqualJSX(
    <a href='/#disqus_thread'><span>{`My Content`}</span></a>
  )
})

test('Should insert script', t => {
  const component = renderIntoDocument(
    <ReactDisqusCounter shortname='test' url='/' isLink >
      <span>{`My Content`}</span>
    </ReactDisqusCounter>
  )

  component.componentDidMount()
  const scripts = global.document.head.getElementsByTagName('script')
  expect(scripts.length).toEqual(1)
  expect(scripts[0].src).toEqual('//test.disqus.com/count.js')

  // retry mount, mustn't not insert script twice
  component.componentDidMount()
  expect(scripts.length).toEqual(1)

  // try component did update and call reset
  component.componentDidUpdate()
  expect(scripts.length).toEqual(1)
})
