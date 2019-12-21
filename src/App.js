import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
