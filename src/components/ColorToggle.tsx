import React, {useLayoutEffect, useState} from "react";
import "../css/colorToggle.css";

const ColorToggle = (): JSX.Element => {
	const prefersDark = window.matchMedia("(prefers-color-scheme: light)").matches;
	const [light, setLight] = useState<boolean>(prefersDark);

	const handleClick = () => {
		setLight(!light);
	};

	useLayoutEffect(() => {
		document.documentElement.setAttribute("color-mode", light ? "light" : "dark");
	}, [light]);

	return (
		<div className='color-toggle' onClick={handleClick}>
			{light ? "🌙" : "☀️"}
		</div>
	);
};

export default ColorToggle;
