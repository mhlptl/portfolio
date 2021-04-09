import React, {useLayoutEffect, useRef, useState} from "react";
import {addClass} from "../utils";
import "../css/scroll.css";

interface ExperienceHeaderProps {
	companyName: string;
	companyPosition: string;
	companyTimeline: string[];
	direction: string;
}

const ExperienceHeader = (props: ExperienceHeaderProps): JSX.Element => {
	const [showDates, setShowDates] = useState<boolean>(true);

	const {companyName, companyPosition, companyTimeline, direction} = props;

	const expNameRef = useRef<HTMLParagraphElement>(null);
	const expPosRef = useRef<HTMLParagraphElement>(null);
	const expTimeRef = useRef<HTMLParagraphElement>(null);

	useLayoutEffect(() => {
		const onScroll = () => {
			if (expNameRef.current) {
				addClass(expNameRef.current, "slide-in");
			}

			if (expPosRef.current) {
				addClass(expPosRef.current, "slide-in");
			}

			if (expTimeRef.current) {
				addClass(expTimeRef.current, "slide-in");
			}
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		setShowDates(!showDates);
	};

	return (
		<div className='section-item-header'>
			<p ref={expNameRef} className={`experience-name ${direction}`}>
				{companyName}
			</p>
			<p ref={expPosRef} className={`experience-position ${direction}`}>
				{companyPosition}
			</p>
			<p ref={expTimeRef} onClick={handleClick} className={`experience-timeline ${direction}`}>
				{showDates ? companyTimeline[0] : companyTimeline[1]}
			</p>
		</div>
	);
};

export default ExperienceHeader;
