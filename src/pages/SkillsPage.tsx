import React from "react";
import Header from "../components/Header";
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
import Skill from "../components/Skill";
import Webdev from "../images/webdev.jpg";
import Cloud from "../images/cloud.jpg";
import Automation from "../images/automation.png";

const SkillsPage = (): JSX.Element => {
	return (
		<div className='skills-section'>
			<div className='section-container'>
				<Header className={"section-title"} word={"Skills"} />
				<div className='inner-section'>
					<div className='left'>
						<h2 className='section-subtitle'>Full Stack Development</h2>
						<div className='skills-container'>
							<Skill SVG={HTMLSVG} name='HTML' />
							<Skill SVG={CSSSVG} name='CSS' />
							<Skill SVG={JSSVG} name='JavaScript' />
							<Skill SVG={TSSVG} name='TypeScript' />
							<Skill SVG={ReactSVG} name='ReactJS' />
							<Skill SVG={NodeSVG} name='NodeJS' />
						</div>
						<div>
							<ul className='section-list'>
								<li>Building responsive frontends using React.js</li>
								<li>Creating backends for applications using Node.js</li>
								<li>TypeScript to enhance code quality</li>
							</ul>
						</div>
					</div>
					<img src={Webdev} className={"skills-image"} />
				</div>

				<div className='inner-section'>
					<img src={Cloud} className={"skills-image"} />
					<div className='right'>
						<h2 className='section-subtitle'>Cloud</h2>
						<div className='skills-container'>
							<Skill SVG={DockerSVG} name='Docker' />
							<Skill SVG={AWSSVG} name='Amazon Web Services' />
							<Skill SVG={MongoSVG} name='MongoDB' />
							<Skill SVG={PGSVG} name='PostgreSQL' />
						</div>
						<div>
							<ul className='section-list'>
								<li>Using Postgres + MongoDB to store data</li>
								<li>Containerizing projects using Docker for seamless deployment</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='inner-section'>
					<div className='left'>
						<h2 className='section-subtitle'>Other</h2>
						<div className='skills-container'>
							<Skill SVG={PySVG} name='Python' />
							<Skill SVG={JavaSVG} name='Java' />
						</div>
						<div>
							<ul className='section-list'>
								<li>Running automation scripts using Python</li>
								<li>Building GUI applications using Java and JavaFX</li>
							</ul>
						</div>
					</div>
					<img src={Automation} className='skills-image transparent' />
				</div>
			</div>
		</div>
	);
};

export default SkillsPage;
