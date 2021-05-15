import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);

	// 同时设置selectedVideo为返回结果中第一个视频是为了确保只要用户一提交搜素表格
	// 就能有iframe显示,使得页面美观
	setSelectedVideo(items[0]);

	return (
		<div className="ui container">
			<SearchBar onFormSubmit={onTermSubmit} />
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
