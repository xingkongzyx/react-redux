import React from "react";
import SearchBar from "../components/SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

const KEY = "AIzaSyA783jNuFUDVyKUBUqpnoHRBXUuxwec6E0";
class App extends React.Component {
	// 用于将搜到的videos储存于state中
	state = { videos: [] };
	onTermSubmit = async (term) => {
		console.log(term);
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
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

export default App;
