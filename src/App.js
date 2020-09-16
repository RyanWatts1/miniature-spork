import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './Pages/Home';
import LatestNews from './Pages/LatestNews';

function App() {
  return (
    <div>
      <NavBar/>
     

      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/LatestNews" component={ LatestNews } />
        </Switch>
      </Router>
    </div>
    
  );
}


export default App;
