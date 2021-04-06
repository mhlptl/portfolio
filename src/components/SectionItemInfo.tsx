import React from "react";
import ListItem from "./ListItem";

interface SectionItemInfoProps {
	list: string[];
	bulletStyle?: string;
}

const SectionItemInfo = (props: SectionItemInfoProps): JSX.Element => {
	const {list, bulletStyle} = props;

	const createList = () => {
		return list.map((item, index) => {
			return <ListItem key={index} text={item} />;
		});
	};

	return <ul className={`section-item-info ${bulletStyle ? bulletStyle : ""}`}>{createList()}</ul>;
};

export default SectionItemInfo;
