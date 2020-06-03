import { combineReducers } from "redux";

// reducer for returning a static list of songs, no need for action
const songsReducer = () => {
	return [
		{
			title: "沙漠骆驼",
			duration: "5:39",
		},
		{ title: "麻雀", duration: "4:28" },
		{
			title: "年少有为",
			duration: "4:59",
		},
		{
			title: "狂浪",
			duration: "3:15",
		},
	];
};
// reducer for selecting a specific song
const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	// 这个object的key就是我们state object中的key
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
