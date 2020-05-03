import axios from "axios";


// 提前设置好的axios instance
export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
});
