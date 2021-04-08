import React, {useLayoutEffect, useRef, useState} from "react";
import "../css/name.css";

interface NameProps {
	setHide: (arg0: boolean) => void;
}

const Name = (props: NameProps): JSX.Element => {
	const [showHex, setShowHex] = useState(false);

	const topPos = (element: HTMLElement) => {
		if (element === null) return 0;
		return element.getBoundingClientRect().top;
	};

	const nameRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const onScroll = () => {
			const nameContainerPos = topPos(nameRef.current as HTMLElement);
			if (nameContainerPos <= -15) {
				props.setHide(false);
			} else {
				props.setHide(true);
			}
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div ref={nameRef} className='name-container'>
			<div className='name'>
				<span className='first-letter wobble'>M</span>
				ehul&nbsp;
				<span className='first-letter wobble'>P</span>
				atel
			</div>
			<div
				onClick={() => {
					setShowHex(!showHex);
				}}
				className={`title ${showHex ? "hexcode" : ""}`}
			>
				{showHex ? "53 6f 66 74 77 61 72 65 20 45 6e 67 69 6e 65 65 72" : "Software Engineer"}
			</div>
		</div>
	);
};

export default Name;
