import React from "react";

interface SkillProps {
	name: string;
	SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

const Skill = (props: SkillProps): JSX.Element => {
	const {SVG} = props;

	return <SVG className='skills-image' />;
};

export default Skill;
