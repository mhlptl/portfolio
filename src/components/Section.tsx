import React from "react";
import "../css/section.css";
import Experience from "./Experience";
import Header from "./Header";
// import SectionItem from "./SectionItem";

interface SectionProps {
	title: string;
}

const Section = (props: SectionProps): JSX.Element => {
	const {title} = props;

	return (
		<section className='section-container'>
			<Header word={title} />
			<Experience />
		</section>
	);
};

export default Section;
