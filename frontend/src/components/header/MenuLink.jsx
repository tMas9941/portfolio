import React from "react";
import { Link } from "react-scroll";

export default function MenuLink({ text, to }) {
	return (
		<Link
			className="group px-3 flex flex-cols gap-1 cursor-pointer items-center active:text-primary h-full"
			to={to}
			smooth={true}
			spy={true}
			duration={400}
			offset={-100}
		>
			<div className="w-1 me-1 bg-primary h-0 group-hover:h-5 origin-center transition-all duration-150 ease-in rounded"></div>
			<p className="text-text group-hover:text-primary text-xl ">{text}</p>
		</Link>
	);
}
