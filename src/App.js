import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
            <Route exact path='/contact' element={<Contact />} />
            <Route path="/Post/: post_id" element={<Post/>}/>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
