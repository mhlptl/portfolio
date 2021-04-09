import React, {useLayoutEffect, useRef} from "react";
import {toggleClass} from "../utils";

interface SkillsHeaderProps {
	skillsName: string;
	children: JSX.Element;
	direction: string;
}

const SkillsHeader = (props: SkillsHeaderProps): JSX.Element => {
	const {skillsName, children, direction} = props;

	const skillNameRef = useRef<HTMLParagraphElement>(null);

	useLayoutEffect(() => {
		const onScroll = () => {
			if (skillNameRef.current) {
				toggleClass(skillNameRef.current, "slide-in");
			}
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className={"section-item-header"}>
			<p ref={skillNameRef} className={`skills-name ${direction}`}>
				{skillsName}
			</p>
			{children}
		</div>
	);
};

export default SkillsHeader;
