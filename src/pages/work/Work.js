import React from 'react'
import DefaultContainerFlex from '../../containers/DefaultContainerFlex';
import FluffText from '../../components/fluff/FluffText';
import { useLocation } from 'react-router-dom';
import '../pages.css';
import './work.css';
import Article from '../../components/article/Article';

const Work = () => {
  const location = useLocation();
  
  return (
    <DefaultContainerFlex 
    content={
      <>
        <h1 className="page-title">Timeline</h1>
        <Article title={"ALTEN"} metatitle={"29.9.2019 - Present"} text={"Some text about the workplace and the work done there plus some fluff crap. Some text about the workplace and the work done there plus some fluff crap."}/>
        <Article title={"ALTEN"} metatitle={"29.9.2019 - 29.9.2019"} text={"Some text about the workplace and the work done there plus some fluff crap."}/>
        <Article title={"ALTEN"} metatitle={"29.9.2019 - 29.9.2019"} text={"Some text about the workplace and the work done there plus some fluff crap. Some text about the workplace and the work done there plus some fluff crap."}/>
        <Article title={"ALTEN"} metatitle={"29.9.2019 - 20.9.2019"} text={"Some text about the workplace and the work done there plus some fluff crap."}/>
        <FluffText text={location.pathname.slice(1)} />
      </>
    }
    />
  )
};

export default Work;
