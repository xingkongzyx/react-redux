import React from "react";
import ReactDOM from "react-dom";
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


