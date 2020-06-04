import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
	// return JSX code
	renderList() {
		return this.props.songs.map((song) => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button className="ui button primary">
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		});
	}

	render() {
		
		return <div className="ui divided list">{this.renderList()} </div>;
	}
}

/* 将store中的state(all data)传入function并进行一些计算, 
最后使数据以props的形式显示于component中 */
const mapStatetToProps = (state) => {
	return { songs: state.songs };
};
export default connect(mapStatetToProps)(SongList);
