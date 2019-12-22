import React from 'react';
import './article.css';

const Article = ({ title, metatitle, text }) =>
  <article>
    <h2>{title}</h2>
    <h3>{metatitle}</h3>
    <p>{text}</p>
  </article>
;

export default Article;
