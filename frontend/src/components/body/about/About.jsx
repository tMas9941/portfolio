import React from "react";
import content from "../../../assets/content";
import SectionContainer from "../../SectionContainer";

export default function About() {
	return (
		<div className="flex w-full justify-center " id="about">
			{/* <img src="icon.svg" className="h-full mt-20 grow-2" /> */}
			<SectionContainer title="Hi, I'm Tamás">
				{/* <div className="flex gap-10"> */}

				<div className=" flex flex-col justify-start max-w-xl gap-5">
					<p className="text-xl font-semibold">{content.about}</p>
					<p>{content.about_2}</p>
				</div>
			</SectionContainer>
		</div>
	);
}
