import React from "react";

const VideoItem = (props) => {
	console.log(props.video);
	return (
		<div>
			{props.video.snippet.title}
			<img src={props.video.snippet.thumbnails.medium.url} />
		</div>
	);
};

export default VideoItem;
