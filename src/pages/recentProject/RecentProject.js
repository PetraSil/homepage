import React from 'react';
import'./project.css';
import DefaultContainerFlex from '../../containers/DefaultContainerFlex';

const RecentProject = () => {
	return (
		<DefaultContainerFlex
			content={
				<div className="project__container">
					<h1 className="page__title">My latest<br/>project</h1>
					<h2>PROJECT ONE</h2>
					<h3>2019</h3>
					<div className="project__content">
						<p>Work at Alten Finland is full-stack consultant work in a new software development unit. This has included working with Node.js, React, SASS, Docker, MongoDB, API's, UX and UI designing to name a few. Work at Alten Finland has also included periods of being the SCRUM master during agile sprints.<br/>
							<br/>Work at Alten Finland is full-stack consultant work in a new software development unit. This has included working with Node.js, React, SASS, Docker, MongoDB, API's, UX and UI designing to name a few. Work at Alten Finland has also included periods of being the SCRUM master during agile sprints.
						</p>
						<div className="project__content_image"></div>
					</div>
				</div>
			}
		/>
	)
};

export default RecentProject;