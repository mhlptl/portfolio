import React, {useState} from "react";
import "../css/name.css";

const Name = (): JSX.Element => {
	const [showHex, setShowHex] = useState(false);

	return (
		<div className='name-container'>
			<div className='name'>
				<span className='first-letter wobble'>M</span>
				ehul&nbsp;
				<span className='first-letter wobble'>P</span>
				atel
			</div>
			<div
				onClick={() => {
					setShowHex(!showHex);
				}}
				className={`title ${showHex ? "hexcode" : ""}`}
			>
				{showHex ? "53 6f 66 74 77 61 72 65 20 45 6e 67 69 6e 65 65 72" : "Software Engineer"}
			</div>
		</div>
	);
};

export default Name;
