import React from "react";
import Section from "../components/Section";
import "../css/contact.css";

const ContactPage = (): JSX.Element => {
	return (
		<Section id={"contact"} title={"Contact"}>
			<div className={"contact-container"}>
				<div>LinkedIn</div>
				<div>GitHub</div>
				<div>Email</div>
				<div>AngelList</div>
				{/* <div>button to resume</div> */}
			</div>
		</Section>
	);
};

export default ContactPage;
