import React, {useRef, useLayoutEffect} from "react";
import {addClass} from "../utils";
import ListItem from "./ListItem";

interface SectionItemListProps {
	list: string[];
	bulletStyle?: string;
	direction: string;
}

const SectionItemList = (props: SectionItemListProps): JSX.Element => {
	const {list, bulletStyle, direction} = props;

	const createList = () => {
		return list.map((item, index) => {
			return <ListItem key={index} text={item} />;
		});
	};

	const listRef = useRef<HTMLUListElement>(null);

	useLayoutEffect(() => {
		const onScroll = () => {
			if (listRef.current) {
				addClass(listRef.current, "slide-in");
			}
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<ul ref={listRef} className={`section-item-list ${bulletStyle ? bulletStyle : ""} ${direction}`}>
			{createList()}
		</ul>
	);
};

export default SectionItemList;
