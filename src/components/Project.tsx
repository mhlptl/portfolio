import React from "react";
import SectionItem from "./SectionItem";
import SkillsImagesContainer from "./SkillsImagesContainer";

interface ProjectProps {
	openModal: (e: React.MouseEvent) => void;
	projectName: string;
	href: string;
	src: string;
	projectInfo?: string;
	images: JSX.Element[];
	liveHref?: string;
}

const Project = (props: ProjectProps): JSX.Element => {
	const {openModal, images, projectName, href, liveHref, src} = props;

	return (
		<SectionItem className={"projects"}>
			<div className={"project-section-item"}>
				<h1 className={"section-item-header"}>{projectName}</h1>
				<SkillsImagesContainer direction={"none"}>
					<React.Fragment>{images}</React.Fragment>
				</SkillsImagesContainer>
				<img onClick={openModal} className={"project-screenshot"} src={src} alt={"water intake project screenshot"} />
				<div className={"project-info"}>
					<p>keep track of water intake data</p>
					<p>keep track of water intake data</p>
					<p>keep track of water intake data</p>
					<p>keep track of water intake data</p>
				</div>
				<div className={"btn-container"}>
					<button className={"btn btn-outline-primary btn-sm"}>
						<a className={"btn-link"} href={href} target='_blank' rel='noreferrer noopener'>
							Repository
						</a>
					</button>
					{liveHref && 
						<button className={"btn btn-outline-primary btn-sm"}>
							<a className={"btn-link"} href={liveHref} target='_blank' rel='noreferrer noopener'>
								Live Site
							</a>
						</button>
					}
					{/* <button className={'btn btn-outline-primary btn-sm'} >Learn More</button> */}
				</div>
			</div>
		</SectionItem>
	);
};

export default Project;
