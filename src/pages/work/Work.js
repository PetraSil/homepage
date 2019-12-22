import React from 'react'
import DefaultContainerFlex from '../../containers/DefaultContainerFlex';
import '../pages.css';
import './work.css';
import Article from '../../components/article/Article';

const Work = () => {
  
  return (
    <DefaultContainerFlex 
    content={
      <>
        <h1 className="page-title">Timeline</h1>
        <Article title={"ALTEN"} metatitle={"29.9.2019 - Present"} text={"Some text about the workplace and the work done there plus some fluff crap. Some text about the workplace and the work done there plus some fluff crap."}/>
        <Article title={"ALTEN"} metatitle={"29.9.2019 - 29.9.2019"} text={"Some text about the workplace and the work done there plus some fluff crap."}/>
        <Article title={"ALTEN"} metatitle={"29.9.2019 - 29.9.2019"} text={"Some text about the workplace and the work done there plus some fluff crap. Some text about the workplace and the work done there plus some fluff crap."}/>
        <Article title={"ALTEN"} metatitle={"29.9.2019 - 20.9.2019"} text={"Some text about the workplace and the work done there plus some fluff crap."}/>
        <h1 className="page-title">Latest Project</h1>
      </>
    }
    />
  )
};

export default Work;
