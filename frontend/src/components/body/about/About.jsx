import React from "react";
import content from "../../../assets/content";
import SectionContainer from "../SectionContainer";
import Page from "../Page";

export default function About() {
	return (
		<Page id="about">
			<div className="">
				<img src="profile_bg.svg" className="h-100 w-100 m-auto" />
			</div>
			<SectionContainer title="Hi, I'm Tamás" className="">
				<div className=" flex flex-col justify-start max-w-xl gap-5">
					<p className="text-xl font-semibold">{content.about}</p>
					<p>{content.about_2}</p>
				</div>
			</SectionContainer>
		</Page>
	);
}
