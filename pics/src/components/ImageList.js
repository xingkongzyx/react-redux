import React from "react";

const ImageList = (props) => {
	const images = props.images.map((image) => {
		return (
			<img
				key={image.id}
				alt={image.description}
				src={image.urls.regular}
			></img>
		);
	});
	return <div className="image-list">{images}</div>;
};

export default ImageList;
