import React from 'react'
import DefaultContainerFlex from '../../containers/DefaultContainerFlex';
import '../pages.css';
import './contact.css';
import Article from '../../components/article/Article';
import Button from '../../components/button/Button';
import linkedin from './linkedin.png';
import git from './github.png';

const Contact = () => {

  return (
    <DefaultContainerFlex 
    content={
      <section className="contact-container">
        <h1 className="page-title">What's on your mind?</h1>
        <Article
          text={"While I may be busy as a bee in my current job, I am always interested in hearing about new and interesting opportunities or projects where I could possibly challenge, fulfill and advance myself as a developer as well as a designer."}
          textSecond={"So drop me a message on Linkedin if you have something interesting in mind!"}         
        />
        <div className="contact-container-buttons">
          <Button text={"Contact me"} />
          <span>
            <img src={git} alt="Icon link to github"></img>
            <img src={linkedin} alt="Icon link to Linkedin"></img>
          </span>        
        </div>
      </section>
    }
    />
  )
};

export default Contact;
