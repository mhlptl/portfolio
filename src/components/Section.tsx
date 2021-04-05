import React from "react";
import "../css/section.css";
import Header from "./Header";

interface SectionProps {
	title: string;
}

const Section = (props: SectionProps): JSX.Element => {
	const {title} = props;

	return (
		<section className='section-container'>
			<Header word={title} />
		</section>
	);
};

export default Section;
