import React from "react";

// components
import Skills from "../components/body/skills/Skills.jsx";
import About from "../components/body/about/About.jsx";
import Projects from "../components/body/projects/Projects.jsx";
import Contact from "../components/body/contact/Contact.jsx";

export default function Main() {
	return (
		<div className="pt-16 min-h-screen bg-background  text-text text-lg/6 flex flex-col items-center">
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}
