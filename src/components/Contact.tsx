import React from "react";

const Contact = (): JSX.Element => {
	return (
		<div className={"contact-container"}>
			<picture>
				<source srcSet={"/images/github-dark.png"} />
				<source srcSet={"/images/github-light.png"} />
				<a href='https://www.github.com/mhlptl' target='_blank' rel='noreferrer noopener'>
					<img className={"contact-logo"} src={"/images/github-dark.png"} alt='github logo' />
				</a>
			</picture>
			<picture>
				<source srcSet={"/images/al-dark.png"} />
				<source srcSet={"/images/al-light.png"} />
				<a href='https://angel.co/u/mhlptl' target='_blank' rel='noreferrer noopener'>
					<img className={"contact-logo"} src={"/images/al-dark.png"} alt='angel list logo' />
				</a>
			</picture>
			<a href='https://www.linkedin.com/in/mehulnpatel23/' target='_blank' rel='noreferrer noopener'>
				<img className={"contact-logo"} src={"/images/linkedin.png"} alt='linkedin logo' />
			</a>
		</div>
	);
};

export default Contact;
