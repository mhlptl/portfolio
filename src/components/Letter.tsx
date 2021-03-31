import React from "react";

interface LetterProps {
	letter: string;
	className: string;
}

const Letter = (props: LetterProps): JSX.Element => {
	return <span className={props.className}>{props.letter}</span>;
};

export default Letter;
