import React from "react";

export default function Page({ id, children, className }) {
	return (
		<div
			id={id}
			className={"min-h-screen w-full flex items-center justify-center py-28 " + className}
		>
			{children}
		</div>
	);
}
