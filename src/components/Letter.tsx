import React from "react";

interface LetterProps {
	letter: string;
	className: string;
}

const Letter = (props: LetterProps): JSX.Element => {
	const {className, letter} = props;
	return <span className={className}>{letter}</span>;
};

export default Letter;
