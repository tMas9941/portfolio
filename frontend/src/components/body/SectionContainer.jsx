import React from "react";

export default function SectionContainer({ id, title, children, className }) {
	return (
		<section className={className} id={id}>
			<div className="flex flex-col items-start gap-5 max-w-4xl ">
				<div className="flex gap-4">
					<div className="h-10 w-3 bg-primary rounded-lg"></div>
					<h1 className="text-text text-4xl mb-10">{title}</h1>
				</div>
				{children}
			</div>
		</section>
	);
}
