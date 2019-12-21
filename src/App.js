import React from 'react';
import DefaultContainer from './containers/DefaultContainer';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import FluffText from './components/fluff/FluffText';

const App = () => {
  return (
    <>
      <Navbar />
      <DefaultContainer 
      content={
        <>
        <Intro />
        <FluffText text={"Home"} />
        </>
      }
      />
    </>
  );
}

export default App;
