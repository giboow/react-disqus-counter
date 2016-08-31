# react-disqus-counter
[![Build Status](https://travis-ci.org/giboow/react-disqus-counter.svg?branch=master)](https://travis-ci.org/giboow/react-disqus-counter)

React Discus counter component

# Usage
____

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