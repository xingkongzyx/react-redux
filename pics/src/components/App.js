import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
// import ImageList from "./ImageList";
class App extends React.Component {
	state = { images: [] };

	// 用户submit form时调用的callback, 负责make a request to api
	onSearchSubmit = async (term) => {
		// make a request to unsplash api
		const { data } = await unsplash.get("/search/photos", {
			// 在make request中需要的参数
			params: { query: term },
		});
		this.setState({ images: data.results });
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				Found {this.state.images.length} images!
			</div>
		);
	}
}

export default App;
