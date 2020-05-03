import "./VideoItem.css";
import React from "react";

const VideoItem = (props) => {
	// console.log(props);
	return (
		<div
			// 在这路调用传递的onVideoSelect method,要使用arrow function,因为我们要主动调用它
			onClick={() => {
				props.onVideoSelect(props.video);
			}}
			className="video-item item"
		>
			<img
				className="ui image"
				src={props.video.snippet.thumbnails.medium.url}
			/>
			<div className="content">
				<div className="header">{props.video.snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoItem;
