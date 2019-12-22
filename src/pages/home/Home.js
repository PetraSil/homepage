import React from 'react'
import DefaultContainerFlex from '../../containers/DefaultContainerFlex';
import Intro from '../../components/intro/Intro';
import '../pages.css';

const Home = () =>
  <DefaultContainerFlex
  content={
    <>
      <Intro />
    </>
  }
  />
;

export default Home;
