import React from "react";
import SearchBar from "../components/SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

const KEY = "AIzaSyBf-mBYkmKoyfGEBInvrtMxeZuMQBQGiho";
class App extends React.Component {
	// 用于将搜到的videos储存于state中
	state = { videos: [], selectedVideo: null };

	// 用于设置页面第一次启动时的默认视频搜索关键词(设置为Google)
	componentDidMount = () => {
		this.onTermSubmit("Google");
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	onTermSubmit = async (term) => {
		const response = await youtube.get("/search", {
			params: {
				q: term,
				part: "snippet",
				maxResults: 5,
				type: "video",
				key: KEY,
			},
		});
		const { items } = response.data;
		// 同时设置selectedVideo为返回结果中第一个视频是为了确保只要用户一提交搜素表格
		// 就能有iframe显示,使得页面美观
		this.setState({ videos: items, selectedVideo: items[0] });
	};
	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail
								video={this.state.selectedVideo}
							/>
						</div>
						<div className="five wide column">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
