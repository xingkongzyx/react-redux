import React from "react";
class SearchBar extends React.Component {
	state = { term: "hi there" };

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Image Search</label>
						<input
							type="text"
							// 将会使用state term value overwrite已经在input之间的值
							value={this.state.term}
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
