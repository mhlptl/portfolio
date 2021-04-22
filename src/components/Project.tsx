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
				<picture className={"project-ss-container"}>
					<source srcSet={`${src}.webp`} type={"image/webp"} />
					<source srcSet={`${src}.png`} type={"image/png"} />
					<img onClick={openModal} className={"project-screenshot"} src={`${src}.png`} alt={"project screenshot"} />
				</picture>
				<div className={"project-info"}>
					<ul className={"project-info-list"}>
						{projectInfo.map((info, index) => {
							return <li key={index}>{info}</li>;
						})}
					</ul>
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
