import React, {  useEffect, useContext, createContext, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Work from './pages/work/Work';
import Contact from './pages/contact/Contact';
import { BrowserRouter as Router, withRouter, Switch, Route, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import AbsoluteWrapper from './containers/AbsoluteWrapper';

const App = () => {
  
const { location } = useContext(__RouterContext);
const pageTransitions = useTransition(location, location => location.pathname, {
  config: { duration: 800 },
  from: { opacity: 0, transform: "translate(0, 100%)" },
  enter: { opacity: 1, transform: "translate(0, 0)" },
  leave: { opacity: 0, transform: "translate(0, -50%)" }
});

  return (
      <>
        <Navbar />
        {pageTransitions.map(({item, props, key}) => (
          <AbsoluteWrapper content={
            <animated.div key={key} style={props}>
              <Switch location={item}>
                <Route path="/" exact component={Home} />
                <Route path="/work" component={Work} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </animated.div>
          } />
        ))}
      </>
  );
}

export default withRouter(App);
