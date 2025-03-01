import React from "react";
import { Link } from "react-router";

export default function MenuLink({ text, travelTo }) {
	return (
		<Link to={travelTo}>
			<p className="text-text text-xl">{text}</p>
		</Link>
	);
}
