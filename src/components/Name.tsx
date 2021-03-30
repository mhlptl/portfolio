import React, {useLayoutEffect, useRef} from "react";

const Name = (): JSX.Element => {
	// const [hide, setHide] = useState(false);

	const topPos = (element: HTMLElement) => {
		if (element === null) return 0;
		return element.getBoundingClientRect().top;
	};

	const nameRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const onScroll = () => {
			const nameContainerPos = topPos(nameRef.current as HTMLElement);
			if (nameContainerPos <= 0) {
				const nameContainer = nameRef.current;
				if (nameContainer) {
					nameContainer.classList.add("name-scroll", "sticky-logo");
					// setHide(true);
				}
			} else if (nameContainerPos > 0) {
				const nameContainer = nameRef.current;
				if (nameContainer) {
					nameContainer.classList.remove("name-scroll", "sticky-logo");
					// setHide(false);
				}
			}
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div ref={nameRef} className='name-container'>
			<div className='firstname'>
				<span className='first-letter'>M</span>ehul
				{/* {!hide && <span className='name-shadow first-name-shadow'>M</span>} */}
			</div>
			<div className='lastname'>
				<span className='first-letter'>P</span>atel
				{/* {!hide && <span className='name-shadow'>P</span>} */}
			</div>
		</div>
	);
};

export default Name;
