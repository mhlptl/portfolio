import React from "react";
// import Footer from "../components/Footer";
import Name from "../components/Name";
import Section from "../components/Section";
import SlantedBox from "../components/SlantedBox";
import ExperiencePage from "./ExperiencePage";
// import ProjectsPage from "./ProjectsPage";
// import SkillsPage from "./SkillsPage";

const HomePage = (): JSX.Element => {
	return (
		<div className='content'>
			<SlantedBox size={"xl"} />
			<Name />
			<SlantedBox size={"lg"} />
			<SlantedBox size={"md"} className={"raise-md"} />
			<SlantedBox size={"sm"} className={"raise-sm"} />
			<Section title={"Experience"} />
			<ExperiencePage />
			{/* <SkillsPage /> */}
			{/* <ProjectsPage /> */}
			{/* <Footer /> */}
		</div>
	);
};

export default HomePage;
