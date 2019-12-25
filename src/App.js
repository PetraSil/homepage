import React, {  useContext,  useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Work from './pages/work/Work';
import Contact from './pages/contact/Contact';
import { Redirect, withRouter, Switch, Route, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import AbsoluteWrapper from './containers/AbsoluteWrapper';
import MobileMenu from './components/mobileMenu/MobileMenu';
import FluffText from './components/fluff/FluffText';

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { location } = useContext(__RouterContext);
  const pageTransitions = useTransition(location, location => location.pathname, {
    config: { duration: 800 },
    from: { opacity: 0 },
    enter: { opacity: 1},
    leave: { opacity: 0 }
  });

  return (
      <>
        <Navbar open={mobileOpen} setMobile={setMobileOpen}/>
        <MobileMenu open={mobileOpen} setMobile={setMobileOpen}/>
        <FluffText 
          text={ location.pathname.replace(/\//g,'') === 'home/' ? 'HOME' : location.pathname.replace(/\//g,'')}
        />
        {pageTransitions.map(({item, props, key}) => (
          <AbsoluteWrapper content={
            <animated.div key={key} style={props} >
              <Switch location={item}>
                <Route path="/home" exact component={Home} />
                <Route path="/work" exact component={Work} />
                <Route path="/contact" exact component={Contact} />
                <Redirect path="/" exact to="/home" component={Home} />
              </Switch>
            </animated.div>
          } />
        ))}
      </>
  );
}

export default withRouter(App);