import React from "react";
import TSSVG from "../svg/typescript.svg";
import ReactSVG from "../svg/reactjs.svg";

const BuiltWith = (): JSX.Element => {
	return (
		<div className={"footer-built-with"}>
			Built with
			<TSSVG className={"built-with-icon"} />
			<ReactSVG className={"built-with-icon"} />
		</div>
	);
};

export default BuiltWith;
