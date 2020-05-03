import React from "react";
import SearchBar from "../components/SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

const KEY = "AIzaSyA783jNuFUDVyKUBUqpnoHRBXUuxwec6E0";
class App extends React.Component {
	// 用于将搜到的videos储存于state中
	state = { videos: [], selectedVideo: null };

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
		console.log("From the app", video);
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
		this.setState({ videos: items });
	};
	render() {
		if (this.state.selectedVideo) {
			console.log(this.state.selectedVideo);
			return (
				<div className="ui container">
					<SearchBar onFormSubmit={this.onTermSubmit} />
					<VideoDetail />
				</div>
			);
		}
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<VideoList
					onVideoSelect={this.onVideoSelect}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}

export default App;
