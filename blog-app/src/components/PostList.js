import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";
class PostList extends React.Component {
	componentDidMount() {
		console.log(this.props);
		this.props.fetchPost();
	}
	render() {
		return <div>Songs</div>;
	}
}

// const mapStateToProps = (state) => {};

export default connect(null, { fetchPost })(PostList);
