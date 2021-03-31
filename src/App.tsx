import React from "react";
import Name from "./components/Name";
import NavBar from "./components/NavBar";
import SlantedBox from "./components/SlantedBox";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

const App = (): JSX.Element => {
	return (
		<React.Fragment>
			<NavBar />
			<SlantedBox className={"slanted-div"} />
			<Name />
			<SlantedBox containerClassName={"slanted-div-under-container"} className={"slanted-div-under"} />
			<SlantedBox containerClassName={"slanted-div-under-container2"} className={"slanted-div-under2"} />
			<SlantedBox containerClassName={"slanted-div-under-container3"} className={"slanted-div-under3"} />
			<SkillsPage />
			<ProjectsPage />
		</React.Fragment>
	);
};

export default App;
