import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
	if (song) {
		return (
			<div>
				<h3>Details for:</h3>
				<p>
					Title: {song.title} <br></br>Duration:{" "}
					{song.duration}
				</p>
			</div>
		);
	} else {
		return <div>Select a Song</div>;
	}
};

const mapStateToProp = (state) => {
	// 这里返回的object会以props的形式在component中展现
	return { song: state.selectedSong };
};

export default connect(mapStateToProp)(SongDetail);
