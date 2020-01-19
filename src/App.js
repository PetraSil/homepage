import React, {  useContext,  useState, Suspense, lazy } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Work from './pages/work/Work';
import Contact from './pages/contact/Contact';
import { Redirect, withRouter, Switch, Route, __RouterContext } from 'react-router-dom';
import { config, useTransition, animated } from 'react-spring';
import AbsoluteWrapper from './containers/AbsoluteWrapper';
import MobileMenu from './components/mobileMenu/MobileMenu';
import FluffText from './components/fluff/FluffText';
const Project = lazy(() => import('./pages/recentProject/RecentProject'));

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { location } = useContext(__RouterContext);
  const pageTransitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" },
    config: config.slow
  });

  return (
      <>
        <Navbar open={mobileOpen} setMobile={setMobileOpen}/>
        <MobileMenu open={mobileOpen} setMobile={setMobileOpen}/>
        <FluffText 
          text={ location.pathname.replace(/\//g,'') === '' ? 'HOME' : location.pathname.replace(/\//g,'')}
        />
        {pageTransitions.map(({item, props, key}) => (
          <AbsoluteWrapper content={
            <animated.div key={key} style={props} >
              <Suspense fallback={<div>Page loading...</div>}>
                <Switch location={item}>
                  <Route path="/" exact component={Home} />
                  <Route path="/work" exact component={Work} />
                  <Route path="/contact" exact component={Contact} />
                  <Route path="/project" exact component={Project} />
                  <Redirect path="/home" exact to="/" component={Home} />
                </Switch>
              </Suspense>
            </animated.div>
          } />
        ))}
      </>
  );
}

export default withRouter(App);