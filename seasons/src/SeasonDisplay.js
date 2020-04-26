import React from "react";

// 决定现在是什么season
const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat > 0 ? "winter" : "summer";
	}
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	console.log(season);
	return <div>Season display</div>;
};

export default SeasonDisplay;
