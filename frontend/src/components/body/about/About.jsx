import React from "react";
import content from "../../../assets/content";
import SectionContainer from "../../SectionContainer";

export default function About() {
	return (
		<SectionContainer title="About me" id="about">
			<div className="flex flex-cols gap-10">
				<div className=" flex flex-col max-w-xl gap-5">
					<p className="text-xl font-semibold">{content.about}</p>
					<p>{content.about_2}</p>
				</div>
			</div>
		</SectionContainer>
	);
}
