import React from "react";
import Header from "../components/Header";
// import SlantedBox from "../components/SlantedBox";

const SkillsPage = (): JSX.Element => {
	return (
		<div className='section-container'>
			<Header className={"section-title"} word={"Skills"} />
			{/* <SlantedBox containerClassName={'slanted-box-container-skills'} className={'slanted-box-skills'} /> */}
			<h2 className='section-subtitle'>Web</h2>
			<h2 className='section-subtitle'>Cloud</h2>
			<h2 className='section-subtitle'>Other</h2>
		</div>
	);
};

export default SkillsPage;
