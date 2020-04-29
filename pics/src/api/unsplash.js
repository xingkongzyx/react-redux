import axios from "axios";

// 创造提前自定义好的axios instance
export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID Ip2ipfMRnyArzjrb_cgXFzUIWxcX0JtdAkkM-Zs2E4I",
	},
});
