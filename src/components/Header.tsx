import React from "react";
import Letter from "./Letter";

interface HeaderProps {
	word: string;
	className?: string;
}

const Header = (props: HeaderProps): JSX.Element => {
	const letters = [...props.word];
	return (
		<h1 className={props.className}>
			{letters.map((letter, index) => {
				return <Letter key={index} letter={letter} className={"wobble"} />;
			})}
		</h1>
	);
};

export default Header;
