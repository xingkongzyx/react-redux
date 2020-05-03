import React from "react";
import VideoItem from "./VideoItem";
// des={props[0].snippet.description}
const VideoList = ({ videos }) => {
	const renderedList = videos.map((video) => {
		console.log(video);
		return <VideoItem key={video.id.videoId} video={video} />;
	});
	return <div>{renderedList}</div>;
};

export default VideoList;
