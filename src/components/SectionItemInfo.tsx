import React from "react";

interface SectionItemInfoProps {
	children: JSX.Element;
}

const SectionItemInfo = (props: SectionItemInfoProps): JSX.Element => {
	const {children} = props;

	return (
		<div className={"section-item-info-container"}>
			<div className={"section-item-info"}>{children}</div>
		</div>
	);
};

export default SectionItemInfo;
