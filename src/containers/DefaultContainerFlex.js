import React from 'react';
import './container.css';

const DefaultContainerFlex = ({ content }) => 
	<section className="container container__flex">
		{content}
	</section>
;

export default DefaultContainerFlex;