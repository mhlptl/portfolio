import React from "react";

interface NavItemProps {
	name: string;
	link: string;
}

const NavItem = (props: NavItemProps): JSX.Element => {
	const {name, link} = props;

	return (
		<a className={"nav-item"} href={link}>
			<li className={"expand-center"}>{name}</li>
		</a>
	);
};

export default NavItem;
