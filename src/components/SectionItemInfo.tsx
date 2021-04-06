import React from "react";
import ExperienceHeader from "./ExperienceHeader";
import SectionItemList from "./SectionItemList";

const list = [
	"Used Google Maps API to provide details of places nearby",
	"Led team of interns to build site and tools to be used by clients and internally",
	"Collaborated with developers to break project into smaller increments"
];

const SectionItemInfo = (): JSX.Element => {
	return (
		<div className={"section-item-info"}>
			<ExperienceHeader
				companyName={"Proptio"}
				companyPosition={"Software Engineer"}
				companyTimeline={"September 2018 - November 2019"}
			/>
			<SectionItemList list={list} bulletStyle={"house"} />
		</div>
	);
};

export default SectionItemInfo;
