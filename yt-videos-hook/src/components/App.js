import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";
const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, search] = useVideos("google");

	// 同时设置selectedVideo为返回结果中第一个视频是为了确保只要用户一提交搜素表格
	// 就能有iframe显示,使得页面美观
	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	return (
		<div className="ui container">
			<SearchBar onFormSubmit={search} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList
							onVideoSelect={setSelectedVideo}
							videos={videos}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
