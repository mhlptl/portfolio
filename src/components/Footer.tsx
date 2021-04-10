import React from "react";
import BuiltWith from "./BuiltWith";

const Footer = (): JSX.Element => {
	return (
		<footer className='footer'>
			<BuiltWith />
			<div className='footer-made-with'>Made with ❤️ by Mehul Patel</div>
		</footer>
	);
};

export default Footer;
