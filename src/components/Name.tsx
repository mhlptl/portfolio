import React, {useLayoutEffect, useRef, useState} from "react";

const Name = (): JSX.Element => {
	const [hide, setHide] = useState(false);

	const topPos = (element: HTMLElement) => {
		if (element === null) return 0;
		return element.getBoundingClientRect().top;
	};

	const nameRef = useRef<HTMLDivElement>(null);
	const firstNameRef = useRef<HTMLSpanElement>(null);
	const lastNameRef = useRef<HTMLSpanElement>(null);

	useLayoutEffect(() => {
		const onScroll = () => {
			const nameContainerPos = topPos(nameRef.current as HTMLElement);
			if (nameContainerPos <= 0) {
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
			<div className='firstname'>
				{/* <span className='html-tag'>{'< '}</span> */}
				<span ref={firstNameRef} className='first-letter wobble'>
					M
				</span>
				ehul
				<span ref={lastNameRef} className='first-letter wobble'>
					&nbsp;P
				</span>
				atel
				{/* <span className='html-tag'>{' />'}</span> */}
				{/* {!hide && <span className='name-shadow first-name-shadow'>M</	span>} */}
			</div>
			{/* <div className='lastname'> */}
			{/* <span className='first-letter'>P</span>atel */}
			{/* {!hide && <span className='name-shadow'>P</span>} */}
			{/* </div> */}
			{!hide && <div className='title'>Software Engineer</div>}
		</div>
	);
};

export default Name;
