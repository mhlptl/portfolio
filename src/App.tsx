import React from "react";
import Name from "./components/Name";
import NavBar from "./components/NavBar";

const App = (): JSX.Element => {
	return (
		<React.Fragment>
			<NavBar />
			<Name />
		</React.Fragment>
	);
};

export default App;
