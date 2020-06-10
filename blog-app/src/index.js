import React from "react";
import ReactDOM from "react-dom";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App.js";

// 导入middleware
import thunk from "redux-thunk";

// 将middleware与redux store连接
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
