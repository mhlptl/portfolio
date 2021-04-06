import React from "react";

interface SectionImageProps {
	children: JSX.Element;
}

const SectionImage = (props: SectionImageProps): JSX.Element => {
	const {children} = props;

	return <div className={"section-image-container"}>{children}</div>;
};

export default SectionImage;
