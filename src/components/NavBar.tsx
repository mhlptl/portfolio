import React, {useState} from "react";
import ColorToggle from "./ColorToggle";
import NavItem from "./NavItem";
import Menu from "../svg/menu.svg";
import "../css/navbar.css";

interface NavBarProps {
	hide: boolean;
}

const NavBar = (props: NavBarProps): JSX.Element => {
	const [show, setShow] = useState(false);

	const {hide} = props;

	const handleClick = () => {
		setShow(!show);
	};

	return (
		<nav className={`navbar ${!hide ? "navbar-small" : ""}`}>
			<div className={"nav-brand"}>
				{!hide && 
					<React.Fragment>
						<span className={"first-letter"}>M</span>
						<span className={"other-letters"}>ehul&nbsp;</span>
						<span className={"first-letter"}>P</span>
						<span className={"other-letters"}>atel</span>
					</React.Fragment>
				}
			</div>
			<ul
				onClick={() => {
					setShow(false);
				}}
				className={`nav-list ${show ? "show-nav" : ""}`}
			>
				<NavItem name={"Experience"} link={"#experience"} />
				<NavItem name={"Skills"} link={"#skills"} />
				<NavItem name={"Projects"} link={"#projects"} />
				<NavItem name={"Contact"} link={"#contact"} />
			</ul>
			<ColorToggle />

			<Menu onClick={handleClick} className={"menu-icon"} />
		</nav>
	);
};

export default NavBar;
