import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
// 如果不明确声明文件而只是声明目录，webpack将默认使用index.js文件
// 使用{}意味着我们想要import named export from the file
import { selectSong } from "../actions";

const App = () => {
	return (
		<div className="ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					<SongList />
				</div>
				<div className="column eight wide">
					<SongDetail />
				</div>
			</div>
		</div>
	);
};

// pass provider a reference of the redux store

export default App;
