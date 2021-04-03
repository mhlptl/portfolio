import React, {useState} from "react";
import ColorToggle from "./ColorToggle";
// import Name from './Name';
import NavItem from "./NavItem";
import Menu from "../svg/menu.svg";
import "../css/navbar.css";

const NavBar = (): JSX.Element => {
	const [show, setShow] = useState(false);

	const handleClick = () => {
		setShow(!show);
	};

	return (
		<nav className='navbar'>
			{/* <Name/> */}
			<ul className={`nav-list ${show ? "show-nav" : ""}`}>
				<NavItem name={"experience"} />
				<NavItem name={"skills"} />
				<NavItem name={"projects"} />
				<NavItem name={"contact"} />
			</ul>
			<ColorToggle />

			<Menu onClick={handleClick} className={"menu-icon"} />
		</nav>
	);
};

export default NavBar;
