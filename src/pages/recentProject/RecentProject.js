import React from 'react';
import DefaultContainerFlex from '../../containers/DefaultContainerFlex';
import Project from '../../components/project/project';
import './recentProject.css';

const RecentProject = () => {

	const githubLinkFirst = () =>
	window.open(
		'https://github.com/PetraSil/wolt','_blank'
	);

	const githubLinkSecond = () =>
	window.open(
		'https://github.com/PetraSil/patientRegistrationApp','_blank'
	);

	return (
		<DefaultContainerFlex
			content={
				<>
				<h1 className="page__title page__title_project">My latest<br/>projects</h1>
					<Project 
						title={"FOOD COURIER SITE - a lightweight version to imitate WOLT's service"}
						metaTitle={"WORK IN PROGRESS"}
						textUpper={"As my current projects at work are under NDA, I made this project for fun to imitate the excellent site WOLT has for their services. At the moment it has a working front and back with a connection to a database that enables a restaurant search and proximity checks."}
						textLower={"Excluding the small libraries used, this application is mostly built with React, Node.js, MongoDB with geolocation and latest context API. Basic design has been done in Figma."}
						linkFirst={"https://www.figma.com/proto/HkBk2C2679WTzlfDuCNaQ5/Wolt-design?node-id=18%3A32&scaling=scale-down"}
						linkSecond={"https://github.com/PetraSil/wolt"}
						linkTextFirst={`FIGMA Design in Progress`}
						linkTextSecond={"GITHUB Codebase in Progress"}
						event={githubLinkFirst}
						className={"project__content_image_first"}
					/>
					<Project 
						title={"MYRA - Patient management application for home nursing"}
						metaTitle={"WORK IN PROGRESS"}
						textUpper={"MYRA aims to fill the need for a simple and streamlined way for a nurse to report their patient work at home care, which will save time and resource in a field that is in dire need of all the help it can get."}
						textLower={"While still a work in progress, I wish to include it here despite not being ready, as some might find the process of building an application interesting. The architecture so far includes API design made for a Node.js backend that has been connected to a cloud based MongoDB database with the help of Express and Mongoose. Front is being built using the latest React and Redux for state management based on my UI and UX designs."}
						linkFirst={"https://www.figma.com/proto/tbUEgtBiydUUPjhHWrFJyp/PatientApp?node-id=1%3A59&scaling=contain"}
						linkSecond={"https://github.com/PetraSil/patientRegistrationApp"}
						linkTextFirst={`FIGMA Design in Progress`}
						linkTextSecond={"GITHUB Codebase in Progress"}
						event={githubLinkSecond}
						className={"project__content_image_second"}
					/>
				</>
			}
		/>
	)
};

export default RecentProject;
