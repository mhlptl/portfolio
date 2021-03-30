import React from "react";

interface NavItemProps {
	name: string;
}

const NavItem = (props: NavItemProps): JSX.Element => {
	return <li className='nav-item'>{props.name}</li>;
};

export default NavItem;
