import React from "react";

interface SectionItemProps {
	children: JSX.Element;
	className?: string;
}

const SectionItem = (props: SectionItemProps): JSX.Element => {
	const {children, className} = props;
	return <div className={`section-item ${className ? className : ""}`}>{children}</div>;
};

export default SectionItem;
