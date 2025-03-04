import React from "react";
import SectionContainer from "../../SectionContainer";
import ProjecctCard from "./ProjecctCard";

export default function Projects() {
	return (
		<SectionContainer title="My projects" id="projects" bgColor="bg-accent/10">
			<ProjecctCard />
			<ProjecctCard />
			<ProjecctCard />
			<ProjecctCard />
			<ProjecctCard />
		</SectionContainer>
	);
}
