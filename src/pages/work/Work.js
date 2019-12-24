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
      <div className="work__container">
        <h1 className="page__title">My professional history</h1>
        <Article title={"ALTEN FINLAND"} metatitle={"10 / 2019 - Present"} 
          text={"Work at Alten Finland is full-stack consultant work in a new software development unit. This has included working with Node.js, React, SASS, Docker, MongoDB, API's, UX and UI designing to name a few. Work at Alten Finland has also included periods of being the SCRUM master during agile sprints."}
          textSecond={"An example project is a time and resource management product that has included API designing, back and front building, UX and UI designing and testing."}
        />
        <Article title={"EXOVE"} metatitle={"05 / 2019 - 10 / 2019"} text={"My position at Exove was a front-end developer which mostly included work with Javascript, SASS, HTML, PHP, Drupal and Vagrant."}
          textSecond={"An example project was building a new intranet page for a large finnish university."}
        />
        <Article title={"FREELANCE WEB DEVELOPER"} metatitle={"09 / 2018 - 05 / 2019"} text={"During my time as a freelance web developer I designed and built websites for small customers. Technologies used were Javascript, CSS and HTML."}
          textSecond={"Some example projects were done for a tattoo artist and a technology start-up."}
        />
        <Article title={"ENGINEERING STUDIES"} metatitle={"08 / 2017 - Present"} text={"My engineering studies are nearly finished and I am in the middle of writing my bachelor's thesis. I have specialized in health and well-being technology due to my nursing background."}/>
      </div>
    }
    />
  )
};

export default Work;
