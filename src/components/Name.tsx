import React, {useLayoutEffect, useRef, useState} from "react";
import "../css/name.css";

const Name = (): JSX.Element => {
	const [hide, setHide] = useState(false);
	const [showHex, setShowHex] = useState(false);

	const topPos = (element: HTMLElement) => {
		if (element === null) return 0;
		return element.getBoundingClientRect().top;
	};

	const nameRef = useRef<HTMLDivElement>(null);
	const firstNameRef = useRef<HTMLSpanElement>(null);
	const lastNameRef = useRef<HTMLSpanElement>(null);
	console.log(nameRef.current?.clientWidth);
	console.log(nameRef.current?.clientHeight);

	useLayoutEffect(() => {
		const onScroll = () => {
			const nameContainerPos = topPos(nameRef.current as HTMLElement);
			if (nameContainerPos <= 20) {
				// console.log(nameContainerPos)
				const nameContainer = nameRef.current;
				if (nameContainer) {
					nameContainer.classList.add("name-scroll", "sticky-logo");
					if (firstNameRef.current) firstNameRef.current.style.animationPlayState = "paused";
					if (lastNameRef.current) lastNameRef.current.style.animationPlayState = "paused";
					setHide(true);
				}
			} else if (nameContainerPos > 0) {
				const nameContainer = nameRef.current;
				if (nameContainer) {
					nameContainer.classList.remove("name-scroll", "sticky-logo");
					if (firstNameRef.current) firstNameRef.current.style.animationPlayState = "running";
					if (lastNameRef.current) lastNameRef.current.style.animationPlayState = "running";
					setHide(false);
				}
			}
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div ref={nameRef} className='name-container'>
			<div className='name'>
				<span ref={firstNameRef} className='first-letter wobble'>
					M
				</span>
				ehul&nbsp;
				<span ref={lastNameRef} className='first-letter wobble'>
					P
				</span>
				atel
			</div>
			{!hide && 
				<div
					onClick={() => {
						setShowHex(!showHex);
					}}
					className={`title ${showHex ? "hexcode" : ""}`}
				>
					{showHex ? "53 6f 66 74 77 61 72 65 20 45 6e 67 69 6e 65 65 72" : "Software Engineer"}
				</div>
			}
		</div>
	);
};

export default Name;
