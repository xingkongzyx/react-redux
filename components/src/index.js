import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail
				author="Kevin"
				timeAgo="Today 5:45PM"
				commentText="Hello from Kevin"
				avatar={faker.image.avatar()}
			/>
			<CommentDetail
				author="Colt"
				timeAgo="Today 6:45PM"
				commentText="Hello from Colt"
				avatar={faker.image.avatar()}
			/>
			<CommentDetail
				author="Sam"
				timeAgo="Today 2:45AM"
				commentText="Hello from Sam"
				avatar={faker.image.avatar()}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
