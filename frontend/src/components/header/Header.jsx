import React from "react";
import MenuLink from "./MenuLink";

export default function Header() {
	return (
		<div className="w-full h-16 px-10 bg-background/60 backdrop-blur-md backdrop-sepi fixed border-b border-accent/30 flex flex-cols items-center justify-center z-20">
			<img alt="icon" />
			<div className="flex flex-cols h-full ">
				<MenuLink text="About" to="about" />
				<MenuLink text="Projects" to="projects" />
				<MenuLink text="Skills" to="skills" />
				<MenuLink text="Contact" to="contact" />
			</div>
		</div>
	);
}
