import React from "react";

export default function SkillCard({ title, icon }) {
	return (
		<div className="flex flex-col gap-3 h-40 w-40 items-center bg-secondary py-6 px-10 rounded-lg font-semibold hover:animate-squeeze ">
			<img src={`${icon}.svg`} className="h-full" />
			<span> {title}</span>
		</div>
	);
}
