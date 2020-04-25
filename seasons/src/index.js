import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	state = { lat: null, errorMes: "" };

	render() {
		// Conditional rendering
		if (this.state.lat && !this.state.errorMes) {
			return <div>latitude: {this.state.lat}</div>;
		}

		if (!this.state.lat && this.state.errorMes) {
			return <div>Error: {this.state.errorMes}</div>;
		}

		return <div>Loading</div>;
	}

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
}

ReactDOM.render(<App />, document.querySelector("#root"));
