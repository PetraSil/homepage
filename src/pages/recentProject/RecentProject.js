import React from 'react';
import'./project.css';
import DefaultContainerFlex from '../../containers/DefaultContainerFlex';

const RecentProject = () => {
	const githubLink = () =>
	window.open(
		'https://github.com/PetraSil/patientRegistrationApp','_blank'
	);

	return (
		<DefaultContainerFlex
			content={
				<div className="project__container">
					<h1 className="page__title">My latest<br/>project</h1>
					<h2>MYRA - Patient management application for home nursing</h2>
					<h3>WORK IN PROGRESS</h3>
					<div className="project__content">
						<p>MYRA aims to fill the need for a simple and streamlined way for a nurse to report their patient work at home care, which will save time and resource in a field that is in dire need of all the help it can get.<br/>
							<br/>While still a work in progress, I wish to include it here despite not being ready, as some might find the process of building an application interesting. The architecture so far includes API design made for a Node.js backend that has been connected to a cloud based MongoDB database with the help of Express and Mongoose.
							Front is being built using the latest React and Redux for state management based on my UI and UX designs.
							<br/><br/>
							<a className="project__content_link" href="https://www.figma.com/proto/tbUEgtBiydUUPjhHWrFJyp/PatientApp?node-id=1%3A59&scaling=contain" target="_blank">FIGMA Design in Progress &#8594;</a> 
							<a className="project__content_link" href="https://github.com/PetraSil/patientRegistrationApp" target="_blank">GITHUB Codebase in Progress &#8594;</a> 
						</p>
						<div className="project__content_image" onClick={githubLink}></div>
					</div>
				</div>
			}
		/>
	)
};

export default RecentProject;