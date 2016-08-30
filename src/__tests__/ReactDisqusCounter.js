import test from 'ava'
import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import ReactDiscusCounter from '../ReactDisqusCounter'

test('Should render non-link element with no default content', t => {
  const renderer = createRenderer()
  renderer.render(
    <ReactDiscusCounter shortname='test' url='/' />
  )
  expect(renderer.getRenderOutput()).toEqualJSX(
    <span className={['disqus-comment-count']} data-disqus-url='/' />
  )
})

test('Should render non-link element with content', t => {
  const renderer = createRenderer()
  renderer.render(
    <ReactDiscusCounter shortname='test' url='/' content='My Content' />
  )
  expect(renderer.getRenderOutput()).toEqualJSX(
    <span className={['disqus-comment-count']} data-disqus-url='/'>{`My Content`}</span>
  )
})

test('Should render link element with no default content', t => {
  const renderer = createRenderer()
  renderer.render(
    <ReactDiscusCounter shortname='test' url='/' isLink />
  )
  expect(renderer.getRenderOutput()).toEqualJSX(
    <a href='/#disqus_thread' />
  )
})

test('Should render link element with content', t => {
  const renderer = createRenderer()
  renderer.render(
    <ReactDiscusCounter shortname='test' url='/' isLink content={`My Content`} />
  )
  expect(renderer.getRenderOutput()).toEqualJSX(
    <a href='/#disqus_thread'>{`My Content`}</a>
  )
})
