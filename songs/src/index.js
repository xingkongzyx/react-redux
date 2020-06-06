import React from "react";
import ReactDOM from "react-dom";
// 如果不明确声明文件而只是声明目录，webpack将默认使用index.js文件
// 使用{}意味着我们想要import named export from the file
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
	// 用provider将app包裹(创造一个Provider instance)
	// 使用createStore function并传入reducers从而得到代表整个redux app的object
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
