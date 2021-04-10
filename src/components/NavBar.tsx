import React, {useState, useLayoutEffect, useRef} from "react";
import ColorToggle from "./ColorToggle";
import NavItem from "./NavItem";
import Menu from "../svg/menu.svg";
import "../css/navbar.css";
// import { inViewport } from "../utils";

interface NavBarProps {
	hide: boolean;
}

const navData = [
	{name: "Experience", link: "#experience", id: "nav-experience", targetId: "experience"},
	{name: "Skills", link: "#skills", id: "nav-skills", targetId: "skills"},
	{name: "Projects", link: "#projects", id: "nav-projects", targetId: "projects"},
	{name: "Contact", link: "#contact", id: "nav-contact", targetId: "contact"}
];

// const ids = navData.map((item, index) => {
// 	return {id: item.targetId, index: index};
// })

const NavBar = (props: NavBarProps): JSX.Element => {
	const [show, setShow] = useState(false);
	const [activeIndex, setActiveIndex] = useState<number>(-1);

	const {hide} = props;

	const handleClick = () => {
		setShow(!show);
	};

	const navRef = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		const closeMenu = (e: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(e.target as Node)) {
				setShow(false);
			}
		};

		window.addEventListener("click", closeMenu);
		return () => {
			window.removeEventListener("click", closeMenu);
		};
	}, [navRef]);

	// useLayoutEffect(() => {
	// 	const scrollSpy = (): void => {
	// 		for (const obj of ids) {
	// 			const el = document.getElementById(obj.id);
	// 			if(el) {
	// 				const rect = el.getBoundingClientRect();
	// 				if((rect.top >= 0 && rect.bottom <= window.innerHeight) || (rect.top <= 0 && rect.bottom >= 0)) {
	// 					setActiveIndex(obj.index)
	// 					break;
	// 				}
	// 			}
	// 		}
	// 	}
	// 	window.addEventListener("scroll", scrollSpy);
	// 	return () => {
	// 		return window.removeEventListener("scroll", scrollSpy)
	// 	};
	// }, [])

	const handleNavClick = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<header className='header'>
			<nav ref={navRef} className={`navbar ${!hide ? "navbar-small" : ""}`}>
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
								id={item.id}
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
