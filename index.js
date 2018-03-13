import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './src/components/header'
import Home from './src/views/home'
import About from './src/views/about'
import Contact from './src/views/contact'

import './src/less/base.less'
import './src/js/mrem'

const App = () => (
  <Router>
    <div className="page">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
