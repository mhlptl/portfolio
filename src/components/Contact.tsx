import React from "react";

const Contact = (): JSX.Element => {
	return (
		<div className={"contact-container"}>
			<a href='https://www.github.com/mhlptl' target='_blank' rel='noreferrer noopener'>
				<img className={"contact-logo contact-bw"} src={"/images/github-dark.png"} alt='github logo' />
			</a>
			<a href='https://angel.co/u/mhlptl' target='_blank' rel='noreferrer noopener'>
				<img className={"contact-logo contact-bw"} src={"/images/al-dark.png"} alt='angel list logo' />
			</a>
			<a href='https://www.linkedin.com/in/mehulnpatel23/' target='_blank' rel='noreferrer noopener'>
				<img className={"contact-logo"} src={"/images/linkedin.png"} alt='linkedin logo' />
			</a>
		</div>
	);
};

export default Contact;
