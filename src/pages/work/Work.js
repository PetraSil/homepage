import React from 'react'
import DefaultContainerFlex from '../../containers/DefaultContainerFlex';
import '../pages.css';
import './work.css';
import Article from '../../components/article/Article';
import RecentProject from './recentProject/RecentProject';

const Work = () => {
  
  return (
    <DefaultContainerFlex 
    content={
      <>
        <h1 className="page-title">Timeline</h1>
        <Article title={"ALTEN"} metatitle={"29.9.2019 - Present"} text={"Some text about the workplace and the work done there plus some fluff crap. Some text about the workplace and the work done there plus some fluff crap."}/>
        <Article title={"ALTEN"} metatitle={"29.9.2019 - 29.9.2019"} text={"Some text about the workplace and the dsd sd sad sad sad sadwork done there plus some fluff crap."}/>
        <Article title={"ALTEN"} metatitle={"29.9.2019 - 29.9.2019"} text={"Some text about the workplace and the work done there plus some fluff crap. Some text about the workplace and the work done there plus some fluff crap."}/>
        <Article title={"ALTEN"} metatitle={"29.9.2019 - 20.9.2019"} text={"Some text about the asd asd asd asd asd asd as das dasd as workplace and the work done there plus some fluff crap."}/>
      </>
    }
    />
  )
};

export default Work;
