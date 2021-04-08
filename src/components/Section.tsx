import React from "react";
import "../css/section.css";
import Header from "./Header";

interface SectionProps {
	id: string;
	title: string;
	children: JSX.Element;
}

const Section = (props: SectionProps): JSX.Element => {
	const {id, title, children} = props;

	return (
		<section id={id} className='section-container'>
			<Header word={title} />
			{children}
		</section>
	);
};

export default Section;
