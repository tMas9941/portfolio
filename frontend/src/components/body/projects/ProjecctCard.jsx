import React from "react";
import content from "../../../assets/content";

export default function ProjecctCard() {
	return (
		<>
			<div className="flex flex-cols h-54 w-full bg-white/20">
				<img src="sky.jpeg" />
				<div>
					<h2 className="mb-10 text-xl font-semibold ">Project title</h2>
					<p>{content.about}</p>
				</div>
			</div>
		</>
	);
}
