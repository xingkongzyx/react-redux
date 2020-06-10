import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

// fetch all blogs at a tim -- 使用redux thunk的通用语法, a function returns a function
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
export const fetchUser = (id) => {
	return async (dispatch) => {
		const response = await jsonPlaceholder.get("./users/" + id);
		dispatch({
			type: "FETCH_USER",
			payload: response.data,
		});
	};
};
// whenever we call an action creator inside of an action creator, we need to make sure that
// we dispatch the result of calling the inside action creator.
export const fetchPostsAndUsers = () => {
	// 整个react app只会调用这一个action creator而不再调用上面的两个
	return async (dispatch, getState) => {
		await dispatch(fetchPosts());
		const userIds = _.uniq(_.map(getState().posts, "userId"));
		// console.log(userIds);
		userIds.forEach((userId) => dispatch(fetchUser(userId)));
	};
};
