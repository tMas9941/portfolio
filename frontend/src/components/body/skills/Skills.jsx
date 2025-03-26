import React from "react";
import SectionContainer from "../SectionContainer";
import SkillCard from "./SkillCard";
import content from "../../../assets/content";
import Page from "../Page";

export default function Skills() {
	return (
		<Page id="skills" className="bg-secondary/20">
			<SectionContainer title="Skills" id="skills">
				<span>{content.skills}</span>
				<div className="flex flex-wrap justify-center gap-5 ">
					<SkillCard title="JavaScript" icon="javascript" />
					<SkillCard title="React" icon="react" />
					<SkillCard title="NodeJS" icon="nodejs" />
					<SkillCard title="PostgreSQL" icon="postgresql" />
					<SkillCard title="Prisma" icon="prisma" />
					<SkillCard title="HTML" icon="html" />
					<SkillCard title="CSS" icon="css" />
					<SkillCard title="Tailwind" icon="tailwind" />
					<SkillCard title="GDscript" icon="godot" />
				</div>
			</SectionContainer>
		</Page>
	);
}
