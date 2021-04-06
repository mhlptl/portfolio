import React from "react";

interface SectionItemProps {
	children: JSX.Element;
}

const SectionItem = (props: SectionItemProps): JSX.Element => {
	const {children} = props;
	return <div className='section-item'>{children}</div>;
};

export default SectionItem;
