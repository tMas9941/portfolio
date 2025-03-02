import React from "react";

export default function SectionContainer({ id, title, children }) {
	return (
		<div className="min-h-screen flex flex-col max-w-4xl gap-5 bg-secondary/50" id={id}>
			<h1 className="text-text text-4xl">{title}</h1>
			{children}
		</div>
	);
}
