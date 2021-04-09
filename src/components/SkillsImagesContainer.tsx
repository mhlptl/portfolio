import React, {useLayoutEffect, useRef} from "react";
import {toggleClass} from "../utils";

interface SkillsImagesContainerProps {
	children: JSX.Element;
	direction: string;
}

const SkillsImagesContainer = (props: SkillsImagesContainerProps): JSX.Element => {
	const {children, direction} = props;

	const imageRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const onScroll = () => {
			if (imageRef.current) {
				toggleClass(imageRef.current, "slide-in");
			}
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div ref={imageRef} className={`skills-images-container ${direction}`}>
			{children}
		</div>
	);
};

export default SkillsImagesContainer;
