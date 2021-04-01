import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

const App = (): JSX.Element => {
	return (
		<React.Fragment>
			<NavBar />
			<HomePage />
		</React.Fragment>
	);
};

export default App;
