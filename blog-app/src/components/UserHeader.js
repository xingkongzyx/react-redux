import React from "react";
import { connect } from "react-redux";
// import { fetchPostsAndUsers } from "../actions";

class UserHeader extends React.Component {
	render() {
		const { user } = this.props;
		// If we can not find the right user(app first rendered)
		if (!user) return <div>Loading ...</div>;
		return <div className="header">{user.name}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.users.find((user) => user.id === ownProps.userId),
	};
};

export default connect(mapStateToProps)(UserHeader);
