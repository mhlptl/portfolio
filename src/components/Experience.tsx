import React from "react";
import "../css/experience.css";
import SectionItem from "./SectionItem";
import SectionItemInfo from "./SectionItemInfo";
import House from "../images/select_house.svg";
import SectionImage from "./SectionImage";

const Experience = (): JSX.Element => {
	return (
		<React.Fragment>
			<SectionItem>
				<React.Fragment>
					<SectionItemInfo />
					<SectionImage>
						<House className={"section-item-image"} />
					</SectionImage>
				</React.Fragment>
			</SectionItem>
		</React.Fragment>
	);
};

export default Experience;
