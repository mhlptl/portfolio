import React from "react";
import ExperienceHeader from "./ExperienceHeader";
import "../css/experience.css";
import SectionItem from "./SectionItem";
import SectionItemInfo from "./SectionItemInfo";

const list = [
	"Used Google Maps API to provide details of places nearby",
	"Led team of interns to build site and tools to be used by clients and internally",
	"Collaborated with developers to break project into smaller increments"
];

const Experience = (): JSX.Element => {
	return (
		<React.Fragment>
			<SectionItem>
				<React.Fragment>
					<div>
						<ExperienceHeader
							companyName={"Proptio"}
							companyPosition={"Software Engineer"}
							companyTimeline={"September 2018 - November 2019"}
						/>
						<SectionItemInfo list={list} bulletStyle={"house"} />
					</div>
				</React.Fragment>
			</SectionItem>
		</React.Fragment>
	);
};

export default Experience;
