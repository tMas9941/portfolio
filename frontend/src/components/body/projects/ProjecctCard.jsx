import React from "react";
import content from "../../../assets/content";

export default function ProjecctCard() {
	return (
		<>
			<div className="group flex h-54 w-full gap-10 hover:bg-secondary/20 **:transition-[scale, h, bg] **:duration-1000">
				<div className="overflow-hidden h-full w-4/5">
					<img
						src="sky.jpeg"
						className="h-full object-cover object-center group-hover:scale-120 ease-out"
					/>
					{/* <div className="h-full w-full bg-[url(sky.jpeg)] bg-cover bg-center" /> */}
				</div>

				<div>
					<h2 className="mb-10 text-2xl font-semibold ">Project title</h2>
					<p>{content.about}</p>
				</div>
				<div className="self-end group-hover:h-full h-0 w-3 bg-primary rounded-lg "></div>
			</div>
		</>
	);
}
