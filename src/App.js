import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavTabs from './components/NavTabs';
// import Home from './components/Home'
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <NavTabs></NavTabs>
        {/* <Route exact path="/" component={Home} /> - didn't do what I wanted */}
      </div>
    </Router>
  )
}

export default App;
