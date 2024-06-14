import { useState, useEffect } from 'react';

function ImageComponent({ defaultImagePath, mobileImagePath }) {
	const [imagePath, setImagePath] = useState(defaultImagePath);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 834) {
				setImagePath(mobileImagePath);
			} else {
				setImagePath(defaultImagePath);
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [defaultImagePath, mobileImagePath]);

	return <img src={imagePath} />;
}

export default ImageComponent;
