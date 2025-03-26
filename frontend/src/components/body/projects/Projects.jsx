import React from "react";
import SectionContainer from "../SectionContainer";
import ProjecctCard from "./ProjecctCard";
import Page from "../Page";

export default function Projects() {
	return (
		<Page id="projects">
			<SectionContainer title="My projects">
				<ProjecctCard />
				<ProjecctCard />
				<ProjecctCard />
				<ProjecctCard />
				<ProjecctCard />
			</SectionContainer>
		</Page>
	);
}
