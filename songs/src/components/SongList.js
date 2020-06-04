import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
	render() {
		// this.props === { songs: state.songs };
		console.log(this.props);
		return <div>Song List </div>;
	}
}

/* 将store中的state(all data)传入function并进行一些计算, 
最后使数据以props的形式显示于component中 */
const mapStatetToProps = (state) => {
	return { songs: state.songs };
};
export default connect(mapStatetToProps)(SongList);
