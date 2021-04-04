import React from "react";
import "../css/slantedBox.css";

interface SlantedBoxProps {
	size: string;
	className?: string;
}

const SlantedBox = (props: SlantedBoxProps): JSX.Element => {
	const {size, className} = props;

	return (
		<div className={`slanted-box-container ${className || ""}`}>
			<div className={`slanted-box-${size}`}></div>
		</div>
	);
};

export default SlantedBox;
