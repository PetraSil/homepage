import React from 'react'
import DefaultContainerFlex from '../../containers/DefaultContainerFlex';
import Intro from '../../components/intro/Intro';
import FluffText from '../../components/fluff/FluffText';
import '../pages.css';

const Home = () =>
  <DefaultContainerFlex
  content={
    <>
      <Intro />
      <FluffText text={"Home"}/>
    </>
  }
  />
;

export default Home;
