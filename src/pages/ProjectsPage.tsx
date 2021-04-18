import React, {useState} from "react";
import Section from "../components/Section";
import SectionItem from "../components/SectionItem";
// import SkillsImagesContainer from "../components/SkillsImagesContainer";
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
import Modal from "../components/Modal";
import Project from "../components/Project";

const imageList = [
	[HTMLSVG, CSSSVG, JSSVG, ReactSVG, NodeSVG],
	[HTMLSVG, CSSSVG, TSSVG, ReactSVG, NodeSVG, DockerSVG, PGSVG],
	[HTMLSVG, CSSSVG, JSSVG],
	[ReactSVG, HTMLSVG, CSSSVG, JSSVG],
	[ReactSVG, NodeSVG, HTMLSVG, JSSVG, CSSSVG]
];

const getImages = (index: number) => {
	return imageList[index].map((image, index) => {
		return <Skill className={"project-skills"} key={index} SVG={image} name={"name"} />;
	});
};

const projects = [
	{
		name: "Water Tracker",
		repo: "https://www.github.com/mhlptl/watertracker",
		src: "/images/waterintake.png",
		skills: getImages(0)
	},
	{
		name: "Photo Display",
		repo: "https://github.com/mhlptl/photo-display",
		src: "/images/placeholder.png",
		skills: getImages(1)
	},
	{name: "Minesweeper", repo: "https://github.com/mhlptl/minesweeper", src: "/images/placeholder.png", skills: getImages(2)},
	{name: "Snake Game", repo: "https://github.com/mhlptl/snakegame", src: "/images/placeholder.png", skills: getImages(3)},
	{
		name: "Tweet Deleter",
		repo: "https://github.com/mhlptl/tweetdeleter",
		src: "/images/placeholder.png",
		skills: getImages(4)
	}
];

const ProjectsPage = (): JSX.Element => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [modalSrc, setModalSrc] = useState<string>("");

	const openModal = (e: React.MouseEvent) => {
		e.preventDefault();
		// eslint-disable-next-line no-extra-parens
		const src = (e.target as HTMLImageElement).src;
		const fileName = src.replace(/^.*[\\/]/, "");
		setModalSrc(`/images/${fileName}`);
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<React.Fragment>
			<Section id={"projects"} title={"Projects"}>
				<div className={"projects-list"}>
					{projects.map((project, index) => {
						return (
							<Project
								projectName={project.name}
								openModal={openModal}
								repo={project.repo}
								src={project.src}
								skills={project.skills}
								key={index}
							/>
						);
					})}
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
			{showModal && <Modal src={modalSrc} closeModal={closeModal} />}
		</React.Fragment>
	);
};

export default ProjectsPage;
