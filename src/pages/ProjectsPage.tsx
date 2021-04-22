import React, {useState} from "react";
import Section from "../components/Section";
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
	[ReactSVG, NodeSVG, HTMLSVG, CSSSVG, JSSVG],
	[ReactSVG, NodeSVG, TSSVG, HTMLSVG, CSSSVG, DockerSVG, PGSVG],
	[HTMLSVG, CSSSVG, JSSVG],
	[ReactSVG, HTMLSVG, CSSSVG, JSSVG],
	[ReactSVG, NodeSVG, HTMLSVG, CSSSVG, JSSVG]
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
		src: "/images/waterintake.jpeg",
		skills: getImages(0),
		info: ["Track amount of water consumed", "Charts are made using ChartJS"]
	},
	{
		name: "Photo Display",
		repo: "https://github.com/mhlptl/photo-display",
		src: "/images/photodisplay.jpeg",
		skills: getImages(1),
		info: [
			"Open Source Photo Viewer",
			"Containerized using Docker to simplify deployment",
			"PostgreSQL used to keep track of filenames"
		]
	},
	{
		name: "Minesweeper",
		repo: "https://github.com/mhlptl/minesweeper",
		src: "/images/minesweeper.png",
		skills: getImages(2),
		info: ["Minesweeper built with Vanilla JS", "Three Game Modes (Easy, Medium, Hard)"]
	},
	{
		name: "Snake Game",
		repo: "https://github.com/mhlptl/snakegame",
		src: "/images/snakegame.png",
		skills: getImages(3),
		info: ["Snake Game built with ReactJS"]
	},
	{
		name: "Tweet Deleter",
		repo: "https://github.com/mhlptl/tweetdeleter",
		src: "/images/tweetdeleter.png",
		skills: getImages(4),
		info: ["Web Interface to Delete Tweets", "Backend built using ExpressJS"]
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
								projectInfo={project.info}
							/>
						);
					})}
				</div>
			</Section>
			{showModal && <Modal src={modalSrc} closeModal={closeModal} />}
		</React.Fragment>
	);
};

export default ProjectsPage;
