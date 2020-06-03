
// first action creator
// 使用了named export
export const selectSong = (song) => {
	// return an action (plain js object)
	return {
        type: 'SONG_SELECTED',
        // 明确指出选择的song
        payload: song
    };
};


