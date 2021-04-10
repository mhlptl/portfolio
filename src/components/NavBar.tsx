import React, {useState} from "react";
import ColorToggle from "./ColorToggle";
import NavItem from "./NavItem";
import Menu from "../svg/menu.svg";
import "../css/navbar.css";

interface NavBarProps {
	hide: boolean;
}

const navData = [
	{name: "Experience", link: "#experience"},
	{name: "Skills", link: "#skills"},
	{name: "Projects", link: "#projects"},
	{name: "Contact", link: "#contact"}
];

const NavBar = (props: NavBarProps): JSX.Element => {
	const [show, setShow] = useState(false);
	const [activeIndex, setActiveIndex] = useState<number>(-1);

	const {hide} = props;

	const handleClick = () => {
		setShow(!show);
	};

	const handleNavClick = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<header className='header'>
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
				<div
					onClick={() => {
						setShow(false);
					}}
					className={`nav-list ${show ? "show-nav" : ""}`}
				>
					{navData.map((item, index) => {
						return (
							<NavItem
								name={item.name}
								link={item.link}
								key={index}
								active={index === activeIndex}
								handleClick={() => handleNavClick(index)}
							/>
						);
					})}
					{/* <NavItem name={"Experience"} link={"#experience"} />
					<NavItem name={"Skills"} link={"#skills"} />
					<NavItem name={"Projects"} link={"#projects"} />
					<NavItem name={"Contact"} link={"#contact"} /> */}
				</div>
				<ColorToggle />

				<Menu onClick={handleClick} className={"menu-icon"} />
			</nav>
		</header>
	);
};

export default NavBar;
