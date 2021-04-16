import React, {useState} from "react";
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
import Modal from "../components/Modal";

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
	const [showModal, setShowModal] = useState<boolean>(false);
	const [modalSrc, setModalSrc] = useState<string>("");

	const openModal = (e: React.MouseEvent) => {
		e.preventDefault();
		const src = e.target as HTMLImageElement.src;
		setModalSrc(src);
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<React.Fragment>
			<Section id={"projects"} title={"Projects"}>
				<div className={"projects-list"}>
					<SectionItem className={"projects"}>
						<div className={"project-section-item"}>
							<h1 className={"section-item-header"}>Water Tracker</h1>
							<SkillsImagesContainer direction={"none"}>
								<React.Fragment>{getImages(0)}</React.Fragment>
							</SkillsImagesContainer>
							<img
								onClick={openModal}
								className={"project-screenshot"}
								src={"/images/waterintake.png"}
								alt={"water intake project screenshot"}
							/>
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
			{showModal && <Modal src={modalSrc} closeModal={closeModal} />}
		</React.Fragment>
	);
};

export default ProjectsPage;
