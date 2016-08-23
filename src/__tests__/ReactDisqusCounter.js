import test from 'ava'
import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import ReactDiscusCounter from '../ReactDiscusCounter'

test('Should load script', t => {
  const renderer = createRenderer()
  renderer.render(
    <ReactDiscusCounter />
  )
})
