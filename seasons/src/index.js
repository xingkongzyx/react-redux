import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
	state = { lat: null, errorMes: "" };
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({ lat: position.coords.latitude });
			},
			(error) => {
				// 当我们update state时,我们不需要升级其中的每个property
				// 例如在这里我们只更新 errorMes; 它并不会删除lat 属性
				this.setState({ errorMes: error.message });
			}
		);
	}

	renderContent() {
		// Conditional rendering
		if (this.state.lat && !this.state.errorMes) {
			// 这里使用了props system
			return <SeasonDisplay lat={this.state.lat} />;
		}

		if (!this.state.lat && this.state.errorMes) {
			return <h1 className="error-page">Error: {this.state.errorMes}</h1>;
		}

		return <Spinner message="please accept location request!" />;
	}
	render() {
		return this.renderContent();
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
