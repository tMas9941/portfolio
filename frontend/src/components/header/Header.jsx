import React from "react";
import MenuLink from "./MenuLink";

export default function Header() {
	return (
		<div className="w-full h-16 px-10 bg-background/30 backdrop-blur-md backdrop-sepi fixed border-b border-accent/30 flex items-center justify-center z-20">
			<img alt="icon" />
			<div className="flex h-full">
				<MenuLink text="About" to="about" />
				<MenuLink text="Skills" to="skills" />
				<MenuLink text="Projects" to="projects" />
				<MenuLink text="Contact" to="contact" />
			</div>
		</div>
	);
}
