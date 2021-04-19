import React from "react";
import SectionItem from "./SectionItem";
import SkillsImagesContainer from "./SkillsImagesContainer";

interface ProjectProps {
	openModal: (e: React.MouseEvent) => void;
	projectName: string;
	repo: string;
	src: string;
	projectInfo: string[];
	skills: JSX.Element[];
	liveHref?: string;
}

const Project = (props: ProjectProps): JSX.Element => {
	const {openModal, skills, projectName, repo, liveHref, src, projectInfo} = props;

	return (
		<SectionItem className={"projects"}>
			<div className={"project-section-item"}>
				<h1 className={"section-item-header"}>{projectName}</h1>
				<SkillsImagesContainer>
					<React.Fragment>{skills}</React.Fragment>
				</SkillsImagesContainer>
				<img onClick={openModal} className={"project-screenshot"} src={src} alt={"project screenshot"} />
				<div className={"project-info"}>
					{projectInfo.map((info, index) => {
						return <p key={index}>{info}</p>;
					})}
				</div>
				<div className={"btn-container"}>
					<button className={"btn btn-outline-primary btn-sm"}>
						<a className={"btn-link"} href={repo} target='_blank' rel='noreferrer noopener'>
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
				</div>
			</div>
		</SectionItem>
	);
};

export default Project;
