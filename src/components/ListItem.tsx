import React from "react";

interface ListItemProps {
	text: string;
}

const ListItem = (props: ListItemProps): JSX.Element => {
	const {text} = props;

	return <li className={"list-item"}>{text}</li>;
};

export default ListItem;
