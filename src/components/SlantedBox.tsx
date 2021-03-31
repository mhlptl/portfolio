import React from "react";

interface SlantedBoxProps {
	containerClassName?: string;
	className: string;
}

const SlantedBox = (props: SlantedBoxProps): JSX.Element => {
	return (
		<div className={props.containerClassName || "slanted-div-container"}>
			<div className={props.className}></div>
		</div>
	);
};

export default SlantedBox;
