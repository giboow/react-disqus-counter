import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactDiscusCounter from 'react-disqus-counter';


export default class App extends Component {

  render() {
    return (
      <ReactDiscusCounter
        shortname="http-giboow-fr"
        url="http://giboow.fr/posts/my-first-post/"
      />
    )
  }
}
