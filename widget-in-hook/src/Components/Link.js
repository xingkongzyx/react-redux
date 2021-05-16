import React from 'react';

const Link = ({ children, className, href }) => {
	const onLinkClick = (event) => {
		event.preventDefault();
		window.history.pushState([], '', href);

// 		tell the Route that our url has changed
		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent);
	};
	return (
		<a href={href} className={className} onClick={onLinkClick}>
			{children}
		</a>
	);
};

export default Link;