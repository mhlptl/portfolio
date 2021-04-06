import React from "react";

interface SkillsImagesContainerProps {
	children: JSX.Element;
}

const SkillsImagesContainer = (props: SkillsImagesContainerProps): JSX.Element => {
	const {children} = props;

	return <div className='skills-images-container'>{children}</div>;
};

export default SkillsImagesContainer;
