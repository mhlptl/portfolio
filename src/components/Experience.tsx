import React from "react";
import "../css/experience.css";
import SectionItem from "./SectionItem";
import SectionItemInfo from "./SectionItemInfo";
import House from "../images/select_house.svg";
import Medical from "../images/medical.svg";
import SectionImage from "./SectionImage";
import ExperienceHeader from "./ExperienceHeader";
import SectionItemList from "./SectionItemList";

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
					<SectionItemInfo>
						<React.Fragment>
							<ExperienceHeader
								companyName={"OXOS Medical"}
								companyPosition={"Software Engineer | Platform"}
								companyTimeline={["May 2021 - Present", "Remote"]}
								direction={"left"}
							/>
							{/* <SectionItemList direction={"left"} list={list} bulletStyle={"house"} /> */}
						</React.Fragment>
					</SectionItemInfo>
					<SectionImage>
						<Medical className={"section-item-image"} />
					</SectionImage>
				</React.Fragment>
			</SectionItem>
			<SectionItem>
				<React.Fragment>
					<SectionImage>
						<House className={"section-item-image"} />
					</SectionImage>
					<SectionItemInfo>
						<React.Fragment>
							<ExperienceHeader
								companyName={"Proptio"}
								companyPosition={"Software Engineer"}
								companyTimeline={["September 2018 - November 2019", "(1 year, 2 months)"]}
								direction={"right"}
							/>
							<SectionItemList direction={"right"} list={list} bulletStyle={"house"} />
						</React.Fragment>
					</SectionItemInfo>
				</React.Fragment>
			</SectionItem>
		</React.Fragment>
	);
};

export default Experience;
