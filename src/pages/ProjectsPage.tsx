import React from "react";
import Section from "../components/Section";
import SectionItem from "../components/SectionItem";
import SkillsImagesContainer from "../components/SkillsImagesContainer";
import "../css/projects.css";

import HTMLSVG from "../svg/html5.svg";
import CSSSVG from "../svg/css.svg";
import JSSVG from "../svg/javascript.svg";
import TSSVG from "../svg/typescript.svg";
import ReactSVG from "../svg/reactjs.svg";
import NodeSVG from "../svg/nodejs.svg";
import DockerSVG from "../svg/docker.svg";
import PGSVG from "../svg/postgres.svg";

import Skill from "../components/SkillsImage";

const imageList = [
	[HTMLSVG, CSSSVG, JSSVG, ReactSVG, NodeSVG],
	[HTMLSVG, CSSSVG, TSSVG, ReactSVG, NodeSVG, DockerSVG, PGSVG]
];

const getImages = (index: number) => {
	return imageList[index].map((image, index) => {
		return <Skill className={"project-skills"} key={index} SVG={image} name={"name"} />;
	});
};

const ProjectsPage = (): JSX.Element => {
	return (
		<Section id={"projects"} title={"Projects"}>
			<div className={"projects-list"}>
				<SectionItem className={"projects"}>
					<div className={"project-section-item"}>
						<h1 className={"section-item-header"}>Water Tracker</h1>
						<SkillsImagesContainer direction={"none"}>
							<React.Fragment>{getImages(0)}</React.Fragment>
						</SkillsImagesContainer>
					</div>
				</SectionItem>
				<SectionItem className={"projects"}>
					<div className={"project-section-item"}>
						<h1 className={"section-item-header"}>Photo Display</h1>
						<SkillsImagesContainer direction={"none"}>
							<React.Fragment>{getImages(1)}</React.Fragment>
						</SkillsImagesContainer>
					</div>
				</SectionItem>
				<SectionItem className={"projects"}>
					<div></div>
				</SectionItem>
				<SectionItem className={"projects"}>
					<div></div>
				</SectionItem>
				<SectionItem className={"projects"}>
					<div></div>
				</SectionItem>
			</div>
		</Section>
	);
};

export default ProjectsPage;
