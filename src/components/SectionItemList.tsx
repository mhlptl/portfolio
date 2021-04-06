import React from "react";
import ListItem from "./ListItem";

interface SectionItemListProps {
	list: string[];
	bulletStyle?: string;
}

const SectionItemList = (props: SectionItemListProps): JSX.Element => {
	const {list, bulletStyle} = props;

	const createList = () => {
		return list.map((item, index) => {
			return <ListItem key={index} text={item} />;
		});
	};

	return <ul className={`section-item-list ${bulletStyle ? bulletStyle : ""}`}>{createList()}</ul>;
};

export default SectionItemList;
