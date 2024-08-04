import React from "react";

const Links = ({ github, linkedin }) => {
	return (
		<div>
			<h3>Links</h3>
			{github && <a href={github}>{github}</a>}
			{linkedin && <a href={linkedin}>{linkedin}</a>}
		</div>
	);
};

export default Links;
