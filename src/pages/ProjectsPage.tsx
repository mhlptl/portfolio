import React from "react";
import Header from "../components/Header";
// import Project from '../components/Project'

const ProjectsPage = (): JSX.Element => {
	return (
		<div className='section-container'>
			<Header className={"section-title"} word={"Projects"} />
			{/* <div className='projects-container'>
				<Project/>
				<Project/>
				<Project/>
			</div> */}
		</div>
	);
};

export default ProjectsPage;
