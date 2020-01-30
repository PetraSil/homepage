import React from 'react';
import './project.css';

const Project = ({ title, metaTitle, textUpper, textLower, linkFirst, linkSecond, linkTextFirst, linkTextSecond, event, className }) => {
  return (
    <div className="project__container">
      <h2>{title}</h2>
      <h3>{metaTitle}</h3>
      <div className="project__content">
        <div>
        <p>{textUpper}</p>
        <p>
          {textLower}
          <a className="project__content_link" href={linkFirst} target="_blank" rel="noopener noreferrer">{linkTextFirst}</a> 
          <a className="project__content_link" href={linkSecond} target="_blank" rel="noopener noreferrer">{linkTextSecond}</a> 
        </p>
        </div>
        <div className={className} onClick={event}></div>
      </div>
    </div>
  );
};

export default Project;
