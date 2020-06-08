import React from "react";
import ReactDOM from "react-dom";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App.js";

import thunk from "redux-thunk";

// hook up middleware with redux store
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);


