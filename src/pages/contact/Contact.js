import React from 'react'
import DefaultContainerFlex from '../../containers/DefaultContainerFlex';
import '../pages.css';
import './contact.css';
import Article from '../../components/article/Article';
import Button from '../../components/button/Button';
import linkedin from './linkedin.png';
import git from './github.png';

const Contact = () => {

  const Links = (e) => {
    if(e.target.name == "git") {
      window.open(
        'https://github.com/PetraSil','_blank'
      );
    } else {
      window.open(
        'https://www.linkedin.com/in/petrasilavuori','_blank'
      );    
    };
  };

  return (
    <DefaultContainerFlex 
    content={
      <section className="contact-container">
        <h1 className="page__title">What's on your mind?</h1>
        <Article
          text={"While I may be busy as a bee in my current job, I am always interested in hearing about new and interesting opportunities or projects where I could possibly challenge, fulfill and advance myself as a developer as well as a designer."}
          textSecond={"So drop me a message on Linkedin if you have something interesting in mind!"}         
        />
        <div className="contact-container-buttons">
          <span>
            <img src={git} name="git" alt="Icon link to github" aria-label="Icon of Githug" onClick={Links}></img>
            <img src={linkedin} name="linkedin" alt="Icon link to Linkedin" aria-label="Icon of Linkedin" onClick={Links}></img>
          </span>        
        </div>
      </section>
    }
    />
  )
};

export default Contact;
