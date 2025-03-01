import React from "react";
import MenuLink from "./MenuLink";

export default function Header() {
	return (
		<div className="w-full h-12 px-10 bg-background border-b border-accent/30 flex flex-cols items-center justify-between">
			<img alt="icon" />
			<div className="flex flex-cols gap-5">
				<MenuLink text="Home" />
				<MenuLink text="Projects" />
				<MenuLink text="About" />
			</div>
		</div>
	);
}
