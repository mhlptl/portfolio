import React from "react";
import BuiltWith from "./BuiltWith";
import Contact from "./Contact";

const Footer = (): JSX.Element => {
	return (
		<footer className='footer'>
			<BuiltWith />
			<div className='footer-made-with'>Made with ❤️ by Mehul Patel</div>
			<Contact />
		</footer>
	);
};

export default Footer;
