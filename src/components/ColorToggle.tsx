import React, {useEffect, useState} from "react";
import "../css/colorToggle.css";

const ColorToggle = (): JSX.Element => {
	const [light, setLight] = useState<boolean>(true);

	const handleClick = () => {
		setLight(!light);
	};

	useEffect(() => {
		document.documentElement.setAttribute("color-mode", light ? "light" : "dark");
	}, [light]);

	return (
		<div className='color-toggle' onClick={handleClick}>
			{light ? "🌙" : "☀️"}
		</div>
	);
};

export default ColorToggle;
