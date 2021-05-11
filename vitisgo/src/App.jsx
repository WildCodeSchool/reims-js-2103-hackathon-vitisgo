import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Play from './components/Play';
import Why from './components/Why';
import How from './components/How';
import Benefits from './components/Benefits';
import About from './components/About';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Play} />
      <Route path="/pourquoi" component={Why} />
      <Route path="/comment" component={How} />
      <Route path="/avantages" component={Benefits} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>    
    </BrowserRouter>
    </>
  );
}

<div className="App">
<Play/>      
</div>

export default App;
