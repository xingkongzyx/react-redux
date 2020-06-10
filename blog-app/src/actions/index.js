import jsonPlaceholder from "../apis/jsonPlaceholder";
// import _ from "lodash";
// fetch all blogs at a time
export const fetchPosts = () => {
	return async (dispatch) => {
		const response = await jsonPlaceholder.get("/posts");
		dispatch({
			type: "FETCH_POSTS",
			payload: response.data,
		});
	};
};

// fetch one user at a time
export const fetchUser = function (id) {
	return async function (dispatch) {
		const response = await jsonPlaceholder.get("./users/" + id);
		dispatch({
			type: "FETCH_USER",
			payload: response.data,
		});
	};
};
// // fetch one user at a time
// export const fetchUser = (id) => {
// 	return async (dispatch) => {
// 		const response = await jsonPlaceholder.get("./users/" + id);
// 		dispatch({
// 			type: "FETCH_USER",
// 			payload: response.data,
// 		});
// 	};
// };
