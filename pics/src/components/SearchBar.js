import React from "react";
class SearchBar extends React.Component {
	state = { term: "" };
	render() {
		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>Image Search</label>

						<input
							type="text"
							onChange={(e) =>
								//无论何时我们在表格中输出，我们都会update state
								this.setState({ term: e.target.value })
							}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
