import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };
	// 当用户更改input中信息时调用
	onInputChange = (e) => {
		this.setState({ term: e.target.value });
	};
	// 当用户提交表单时调用
	onFormSubmit = (e) => {
		e.preventDefault();
		// 使用从App component中传入的callback
		this.props.onFormSubmit(this.state.term);
	};
	render() {
		return (
			<div className="search-bar ui segment" onSubmit={this.onFormSubmit}>
				<form className="ui form">
					<div className="field">
						<label>Video Search</label>
						<input
							type="text"
							value={this.state.term}
							placeholder="Please enter the keyword you want to search!"
							// "onChange" is a special name for event handler
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
