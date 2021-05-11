import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Play from './components/Play';
import About from './components/About';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Play} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
}


export default App;
