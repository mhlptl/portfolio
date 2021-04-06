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
import Skill from "../components/Skill";
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
	// return (
	// 	<div className='skills-section'>
	// 		<div className='section-container'>
	// 			<Header className={"section-title"} word={"Skills"} />
	// 			<div className='inner-section'>
	// 				<div className='section-description'>
	// 					<div>
	// 						<h2 className='section-subtitle'>Full Stack Development</h2>
	// 						<div className='skills-container'>
	// 							<Skill SVG={HTMLSVG} name='HTML' />
	// 							<Skill SVG={CSSSVG} name='CSS' />
	// 							<Skill SVG={JSSVG} name='JavaScript' />
	// 							<Skill SVG={TSSVG} name='TypeScript' />
	// 							<Skill SVG={ReactSVG} name='ReactJS' />
	// 							<Skill SVG={NodeSVG} name='NodeJS' />
	// 						</div>
	// 						<div>
	// 							<ul className='section-list'>
	// 								<li>Building responsive frontends using React.js</li>
	// 								<li>Creating backends for applications using Node.js</li>
	// 								<li>TypeScript to enhance code quality</li>
	// 							</ul>
	// 						</div>
	// 					</div>
	// 				</div>
	// 				<div className='section-image-container'>
	// 					<Webdev className={"skills-image"} />
	// 				</div>
	// 			</div>

	// 			<div className='inner-section'>
	// 				<div className='section-image-container'>
	// 					<Cloud className={"skills-image"} />
	// 				</div>
	// 				<div className='section-description'>
	// 					<div>
	// 						<h2 className='section-subtitle'>Cloud</h2>
	// 						<div className='skills-container'>
	// 							<Skill SVG={DockerSVG} name='Docker' />
	// 							<Skill SVG={AWSSVG} name='Amazon Web Services' />
	// 							<Skill SVG={MongoSVG} name='MongoDB' />
	// 							<Skill SVG={PGSVG} name='PostgreSQL' />
	// 						</div>
	// 						<div>
	// 							<ul className='section-list'>
	// 								<li>Using Postgres + MongoDB to store data</li>
	// 								<li>Containerizing projects using Docker for seamless deployment</li>
	// 							</ul>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</div>

	// 			<div className='inner-section'>
	// 				<div className='section-description'>
	// 					<div>
	// 						<h2 className='section-subtitle'>Other</h2>
	// 						<div className='skills-container'>
	// 							<Skill SVG={PySVG} name='Python' />
	// 							<Skill SVG={JavaSVG} name='Java' />
	// 						</div>
	// 						<div>
	// 							<ul className='section-list'>
	// 								<li>Running automation scripts using Python</li>
	// 								<li>Building GUI applications using Java and JavaFX</li>
	// 							</ul>
	// 						</div>
	// 					</div>
	// 				</div>
	// 				<div className='section-image-container'>
	// 					<Automation className='skills-image' />
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// );

	const getImages = (index: number) => {
		return imageList[index].map((image, index) => {
			return <Skill key={index} SVG={image} name={"name"} />;
		});
	};

	return (
		<Section title={"Skills"}>
			<React.Fragment>
				<SectionItem>
					<React.Fragment>
						<SectionItemInfo>
							<React.Fragment>
								<SkillsHeader skillsName={"Full Stack Development"}>
									<SkillsImagesContainer>
										<React.Fragment>{getImages(0)}</React.Fragment>
									</SkillsImagesContainer>
								</SkillsHeader>
								<SectionItemList list={list[0]} bulletStyle={"cloud"} />
							</React.Fragment>
						</SectionItemInfo>
						<SectionImage>
							<Webdev className={"section-item-image"} />
						</SectionImage>
					</React.Fragment>
				</SectionItem>

				<SectionItem>
					<React.Fragment>
						<SectionImage>
							<Cloud className={"section-item-image"} />
						</SectionImage>
						<SectionItemInfo>
							<React.Fragment>
								<SkillsHeader skillsName={"Cloud Infrastructure"}>
									<React.Fragment>{getImages(1)}</React.Fragment>
								</SkillsHeader>
								<SectionItemList list={list[1]} bulletStyle={"cloud"} />
							</React.Fragment>
						</SectionItemInfo>
					</React.Fragment>
				</SectionItem>

				<SectionItem>
					<React.Fragment>
						<SectionItemInfo>
							<React.Fragment>
								<SkillsHeader skillsName={"Software Development"}>
									<React.Fragment>{getImages(2)}</React.Fragment>
								</SkillsHeader>
								<SectionItemList list={list[2]} bulletStyle={"cloud"} />
							</React.Fragment>
						</SectionItemInfo>
						<SectionImage>
							<Automation className={"section-item-image"} />
						</SectionImage>
					</React.Fragment>
				</SectionItem>
			</React.Fragment>
		</Section>
	);
};

export default SkillsPage;
