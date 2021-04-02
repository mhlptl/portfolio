import React from "react";

interface SkillProps {
	name: string;
	SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

const Skill = (props: SkillProps): JSX.Element => {
	return <props.SVG className='skills' />;
};

export default Skill;
