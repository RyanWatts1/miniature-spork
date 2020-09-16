import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './Pages/Home';
import LatestNews from './Pages/LatestNews';
import About from './Pages/About';


function App() {
  return (
    <div>
    
     

      <Router>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/LatestNews" component={ LatestNews } />
          <Route exact path="/About" component={ About } />
        </Switch>
      </Router>
    </div>
    
  );
}


export default App;
