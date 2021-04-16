import React from "react";

interface SkillProps {
	name: string;
	SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	className?: string;
}

const Skill = (props: SkillProps): JSX.Element => {
	const {SVG, className} = props;

	return <SVG className={`skills-image wobble ${className ? className : ""}`} />;
};

export default Skill;
