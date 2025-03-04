import React, { useState } from "react";
import { Link } from "react-scroll";

export default function MenuLink({ text, to }) {
	const [toggled, setToggled] = useState(false);

	return (
		<Link
			className={`group px-3 flex gap-1 cursor-pointer items-center h-full text-text select-none `}
			to={to}
			smooth={true}
			spy={true}
			hashSpy={true}
			duration={600}
			// offset={-65}
			id={`${to}Link`}
			onSetActive={() => setToggled(true)}
			onSetInactive={() => setToggled(false)}
		>
			<div
				className={`${
					toggled ? "h-5" : "h-0"
				} bg-primary w-1 me-1 origin-center transition-all duration-150 ease-in rounded`}
			></div>
			<p className={`group-hover:text-primary text-xl `}>{text}</p>
		</Link>
	);
}
