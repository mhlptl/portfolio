import React, {useState} from "react";

const ColorToggle = (): JSX.Element => {
	const [light, setLight] = useState<boolean>(true);

	const handleClick = () => {
		console.log(light);
		setLight(!light);
		document.documentElement.setAttribute("color-mode", !light ? "light" : "dark");
	};

	return (
		<div className='color-toggle' onClick={handleClick}>
			{light ? "🌙" : "☀️"}
		</div>
	);
};

export default ColorToggle;
