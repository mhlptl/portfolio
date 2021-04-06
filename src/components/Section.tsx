import React from "react";
import "../css/section.css";
import Header from "./Header";

interface SectionProps {
	title: string;
	children: JSX.Element;
}

const Section = (props: SectionProps): JSX.Element => {
	const {title, children} = props;

	return (
		<section className='section-container'>
			<Header word={title} />
			{children}
		</section>
	);
};

export default Section;
