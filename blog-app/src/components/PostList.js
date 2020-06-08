import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
class PostList extends React.Component {
	componentDidMount() {
		// console.log(this.props);
		this.props.fetchPosts();
	}
	render() {
		return <div>Songs</div>;
	}
}

// const mapStateToProps = (state) => {};

export default connect(null, { fetchPosts })(PostList);
