import React, {useState} from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

const App = (): JSX.Element => {
	const [hide, setHide] = useState(true);

	return (
		<React.Fragment>
			<NavBar hide={hide} />
			<HomePage setHide={setHide} />
		</React.Fragment>
	);
};

export default App;
