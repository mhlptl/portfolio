import React from "react";

interface NavItemProps {
	name: string;
	link: string;
	handleClick: (e: React.MouseEvent) => void;
	active: boolean;
	id: string;
}

const NavItem = (props: NavItemProps): JSX.Element => {
	const {name, link, handleClick, active, id} = props;

	return (
		<a onClick={handleClick} className={`nav-item ${active ? "active" : ""}`} id={id} href={link}>
			<span className={"expand-center"}>{name}</span>
		</a>
	);
};

export default NavItem;
