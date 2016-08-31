# react-disqus-counter
[![Build Status](https://travis-ci.org/giboow/react-disqus-counter.svg?branch=master)](https://travis-ci.org/giboow/react-disqus-counter)
[![Coverage Status](https://coveralls.io/repos/github/giboow/react-disqus-counter/badge.svg?branch=master)](https://coveralls.io/github/giboow/react-disqus-counter?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


React Discus counter component

# Usage

`npm install --save react-disqus-counter`

```javascript
import React, { Component } from 'react'
import ReactDisqusCounter from 'react-disqus-counter'

class App extends Component {
  // This sound file may not work due to cross-origin setting
  render () {
    return (
      <ReactDisqusCounter
        url='http://mywebsite/posts/my-post'
		shortname='my-disqus-shortname'
      />
    )
  }
}
```

# License

MIT
