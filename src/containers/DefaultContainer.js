import React from 'react';
import './container.css';

const DefaultContainer = ({ content }) => 
	<section className="container container-default">
		{content}
	</section>
;

export default DefaultContainer;