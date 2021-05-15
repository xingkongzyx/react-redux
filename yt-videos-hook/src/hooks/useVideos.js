import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const KEY = "AIzaSyBf-mBYkmKoyfGEBInvrtMxeZuMQBQGiho";

const useVideos = (defaultSearchTerm) => {
	// 用于将搜到的videos储存于state中
	const [videos, setVideos] = useState([]);

	// 用于设置页面第一次启动时的默认视频搜索关键词(设置为React)
	useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);

	const search = async (term) => {
		const response = await youtube.get("/search", {
			params: {
				q: term,
				part: "snippet",
				maxResults: 5,
				type: "video",
				key: KEY,
			},
		});
		const { items } = response.data;

		setVideos(items);
	};

	// return the ouput 这里指videos和搜素videos的function
	return [videos, search];
	// 也可以使用返回object的形式
	// return { videos, search };
};

export default useVideos;
