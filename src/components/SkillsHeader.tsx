import React from "react";

interface SkillsHeaderProps {
	skillsName: string;
	children: JSX.Element;
}

const SkillsHeader = (props: SkillsHeaderProps): JSX.Element => {
	const {skillsName, children} = props;

	return (
		<div className='section-item-header'>
			<p className='skills-name'>{skillsName}</p>
			{children}
		</div>
	);
};

export default SkillsHeader;
