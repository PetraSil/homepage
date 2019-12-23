import React from 'react';
import './article.css';

const Article = ({ title, metatitle, text, textSecond }) =>
  <article>
    <h2>{title}</h2>
    <h3>{metatitle}</h3>
    <p>{text}</p>
    <br/>
    <p>{textSecond}</p>
  </article>
;

export default Article;
