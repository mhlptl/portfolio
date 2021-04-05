import React from "react";
import Header from "../components/Header";
import House from "../images/select_house.svg";

const ExperiencePage = (): JSX.Element => {
	return (
		<div className='experience-section'>
			<div className='section-container'>
				<Header word={"Experience"} />
				<div className='inner-section'>
					<div className='section-description'>
						<div>
							<h2 className='section-subtitle'>Proptio</h2>
							<div className='position-information'>
								<p className='position'>Software Engineer</p>
								<p>September 2018 - November 2019</p>
							</div>
							<div className='section-list'>
								<ul className='experience-information'>
									<li>Used Google Maps API to provide details of places nearby</li>
									<li>Led team of interns to build site and tools to be used by clients and internally</li>
									<li>Collaborated with developers to break project into smaller increments</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='section-image-container'>
						<House className={"skills-image"} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperiencePage;
