import React from "react";
import Section from "../components/Section";
import SectionImage from "../components/SectionImage";
import SectionItem from "../components/SectionItem";
import SectionItemInfo from "../components/SectionItemInfo";
import SectionItemList from "../components/SectionItemList";
import "../css/skills.css";
// import Header from "../components/Header";
import HTMLSVG from "../svg/html5.svg";
import CSSSVG from "../svg/css.svg";
import JSSVG from "../svg/javascript.svg";
import TSSVG from "../svg/typescript.svg";
import ReactSVG from "../svg/reactjs.svg";
import NodeSVG from "../svg/nodejs.svg";
import DockerSVG from "../svg/docker.svg";
import AWSSVG from "../svg/aws.svg";
import MongoSVG from "../svg/mongodb.svg";
import PGSVG from "../svg/postgres.svg";
import PySVG from "../svg/python.svg";
import JavaSVG from "../svg/java.svg";
// import Skill from "../components/Skill";
import Webdev from "../images/webdev.svg";
import Cloud from "../images/server.svg";
import Automation from "../images/code.svg";
import SkillsHeader from "../components/SkillsHeader";
import Skill from "../components/SkillsImage";
import SkillsImagesContainer from "../components/SkillsImagesContainer";

const list = [
	[
		"Building responsive frontends using React.js",
		"Creating backends for applications using Node.js",
		"TypeScript to enhance code quality"
	],
	["Using Postgres + MongoDB to store data", "Containerizing projects using Docker for seamless deployment"],
	["Running automation scripts using Python", "Building GUI applications using Java and JavaFX"]
];

const imageList = [
	[HTMLSVG, CSSSVG, JSSVG, TSSVG, ReactSVG, NodeSVG],
	[DockerSVG, AWSSVG, MongoSVG, PGSVG],
	[PySVG, JavaSVG]
];

const SkillsPage = (): JSX.Element => {
	const getImages = (index: number) => {
		return imageList[index].map((image, index) => {
			return <Skill key={index} SVG={image} name={"name"} />;
		});
	};

	return (
		<Section id={"skills"} title={"Skills"}>
			<React.Fragment>
				<SectionItem>
					<React.Fragment>
						<SectionItemInfo>
							<React.Fragment>
								<SkillsHeader skillsName={"Full Stack Development"} direction={"left"}>
									<SkillsImagesContainer direction={"left"}>
										<React.Fragment>{getImages(0)}</React.Fragment>
									</SkillsImagesContainer>
								</SkillsHeader>
								<SectionItemList direction={"left"} list={list[0]} bulletStyle={"cloud"} />
							</React.Fragment>
						</SectionItemInfo>
						<SectionImage>
							<Webdev className={"section-item-image skills-item-image"} />
						</SectionImage>
					</React.Fragment>
				</SectionItem>

				<SectionItem>
					<React.Fragment>
						<SectionImage>
							<Cloud className={"section-item-image skills-item-image"} />
						</SectionImage>
						<SectionItemInfo>
							<React.Fragment>
								<SkillsHeader skillsName={"Cloud Infrastructure"} direction={"right"}>
									<SkillsImagesContainer direction={"right"}>
										<React.Fragment>{getImages(1)}</React.Fragment>
									</SkillsImagesContainer>
								</SkillsHeader>
								<SectionItemList direction={"right"} list={list[1]} bulletStyle={"cloud"} />
							</React.Fragment>
						</SectionItemInfo>
					</React.Fragment>
				</SectionItem>

				<SectionItem>
					<React.Fragment>
						<SectionItemInfo>
							<React.Fragment>
								<SkillsHeader skillsName={"Software Development"} direction={"left"}>
									<SkillsImagesContainer direction={"left"}>
										<React.Fragment>{getImages(2)}</React.Fragment>
									</SkillsImagesContainer>
								</SkillsHeader>
								<SectionItemList direction={"left"} list={list[2]} bulletStyle={"cloud"} />
							</React.Fragment>
						</SectionItemInfo>
						<SectionImage>
							<Automation className={"section-item-image skills-item-image"} />
						</SectionImage>
					</React.Fragment>
				</SectionItem>
			</React.Fragment>
		</Section>
	);
};

export default SkillsPage;
