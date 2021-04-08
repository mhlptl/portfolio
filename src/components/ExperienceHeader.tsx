import React, {useState} from "react";

interface ExperienceHeaderProps {
	companyName: string;
	companyPosition: string;
	companyTimeline: string[];
}

const ExperienceHeader = (props: ExperienceHeaderProps): JSX.Element => {
	const [showDates, setShowDates] = useState<boolean>(true);

	const {companyName, companyPosition, companyTimeline} = props;

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		setShowDates(!showDates);
	};

	return (
		<div className='section-item-header'>
			<p className='experience-name'>{companyName}</p>
			<p className='experience-position'>{companyPosition}</p>
			<p onClick={handleClick} className='experience-timeline'>
				{showDates ? companyTimeline[0] : companyTimeline[1]}
			</p>
		</div>
	);
};

export default ExperienceHeader;
