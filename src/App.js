import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
         <Route exact path='/contact' component={Contact} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
