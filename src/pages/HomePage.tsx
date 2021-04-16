import React from "react";
import Footer from "../components/Footer";
import Name from "../components/Name";
import SlantedBox from "../components/SlantedBox";
import ExperiencePage from "./ExperiencePage";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";

interface HomePageProps {
	setHide: (arg0: boolean) => void;
}

const HomePage = (props: HomePageProps): JSX.Element => {
	return (
		<div className='content'>
			<SlantedBox size={"xl"} />
			<Name setHide={props.setHide} />
			<SlantedBox size={"lg"} />
			<SlantedBox size={"md"} className={"raise-md"} />
			<SlantedBox size={"sm"} className={"raise-sm"} />
			<ExperiencePage />
			<SkillsPage />
			<ProjectsPage />
			<Footer />
		</div>
	);
};

export default HomePage;
