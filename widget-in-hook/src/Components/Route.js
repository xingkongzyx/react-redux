import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname);
		};

		window.addEventListener('popstate', onLocationChange);

		return () => {
			// 			cleanup code,如果不再show route了清除event listener
			window.removeEventListener('popstate', onLocationChange);
		};
	}, []);

	if (currentPath === path) return children;
	return null;
};

export default Route;