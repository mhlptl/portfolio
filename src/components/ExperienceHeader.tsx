import React from "react";

interface ExperienceHeaderProps {
	companyName: string;
	companyPosition: string;
	companyTimeline: string;
}

const ExperienceHeader = (props: ExperienceHeaderProps): JSX.Element => {
	const {companyName, companyPosition, companyTimeline} = props;
	return (
		<div className='section-item-header'>
			<p className='experience-name'>{companyName}</p>
			<p className='experience-position'>{companyPosition}</p>
			<p className='experience-timeline'>{companyTimeline}</p>
		</div>
	);
};

export default ExperienceHeader;
