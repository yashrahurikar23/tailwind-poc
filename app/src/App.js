import React from 'react';
import './App.css';
// Packages
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Custom components
import { LoginPage } from './container/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
