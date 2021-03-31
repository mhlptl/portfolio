import React from "react";
import ColorToggle from "./ColorToggle";
// import Name from './Name';
import NavItem from "./NavItem";

const NavBar = (): JSX.Element => {
	return (
		<nav className='navbar'>
			{/* <Name/> */}
			<ul className='nav-list'>
				<NavItem name={"experience"} />
				<NavItem name={"skills"} />
				<NavItem name={"projects"} />
				<NavItem name={"contact"} />
			</ul>
			<ColorToggle />
		</nav>
	);
};

export default NavBar;
