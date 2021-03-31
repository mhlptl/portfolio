import React from "react";
import Name from "./components/Name";
import NavBar from "./components/NavBar";
import SlantedBox from "./components/SlantedBox";

const App = (): JSX.Element => {
	return (
		<React.Fragment>
			<NavBar />
			<SlantedBox />
			<Name />
		</React.Fragment>
	);
};

export default App;
