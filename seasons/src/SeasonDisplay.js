// import css file into project
// 当我们加载css文件时, webpack工具会从文件中获取内容并将其交给index.html进行使用
import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
	summer: {
		text: "夏天来啦！",
		iconName: "massive sun icon",
	},
	winter: {
		text: "我爱冬天！",
		iconName: "massive snowflake icon",
	},
};

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
	const { text, iconName } = seasonConfig[season]; // {text: icon: }
	return (
		<div className={`season-disply ${season}`}>
			<i className={`icon-left ${iconName}`}></i>
			<h1>{text}</h1>
			<i className={`icon-right ${iconName}`}></i>
		</div>
	);
};

export default SeasonDisplay;
