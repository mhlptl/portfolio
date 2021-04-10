import React from "react";

interface NavItemProps {
	name: string;
	link: string;
	handleClick: () => void;
	active: boolean;
}

const NavItem = (props: NavItemProps): JSX.Element => {
	const {name, link, handleClick, active} = props;

	return (
		<a onClick={handleClick} className={`nav-item ${active ? "active" : ""}`} href={link}>
			<span className={"expand-center"}>{name}</span>
		</a>
	);
};

export default NavItem;
