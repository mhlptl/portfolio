import React from "react";
// import Footer from "../components/Footer";
import Name from "../components/Name";
import SlantedBox from "../components/SlantedBox";
// import ExperiencePage from "./ExperiencePage";
// import ProjectsPage from "./ProjectsPage";
// import SkillsPage from "./SkillsPage";

const HomePage = (): JSX.Element => {
	return (
		<div className='content'>
			<SlantedBox className={"slanted-div"} />
			<Name />
			<SlantedBox containerClassName={"slanted-div-under-container"} className={"slanted-div-under"} />
			<SlantedBox containerClassName={"slanted-div-under-container2"} className={"slanted-div-under2"} />
			<SlantedBox containerClassName={"slanted-div-under-container3"} className={"slanted-div-under3"} />
			{/* <ExperiencePage />
			<SkillsPage />
			<ProjectsPage />
			<Footer /> */}
		</div>
	);
};

export default HomePage;
