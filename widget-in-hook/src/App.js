// 提示TypeError: Object(...) is not a function时安装
// npm install --save react@latest
// npm install --save react-dom@latest

import React, { useState } from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';
import Route from './Components/Route';
import Header from './Components/Header';

// 显示在屏幕上的三个问题,作为props传入Accordion component
const items = [
	{
		title: 'What is React?',
		content:
			'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.',
	},
	{
		title: 'How do we show...',
		content: 'To show content...',
	},
	{
		title: 'Why is React useful...',
		content:
			'React is an excellent tool with which to create interactive applications for mobile, web, and other platforms',
	},
];

const options = [
	{
		label: 'The color is blue',
		value: 'blue',
	},
	{
		label: 'The color is red',
		value: 'red',
	},
	{
		label: 'The color is green',
		value: 'green',
	},
	{
		label: 'The color is yellow',
		value: 'yellow',
	},
	{
		label: 'The color is Magenta',
		value: 'Magenta',
	},
	{
		label: 'The color is Aqua',
		value: 'Aqua',
	},
];

const App = () => {
	// 用于追踪选择了哪个的state variable
	const [selected, setSelected] = useState('');
	// 用于控制是否显示dropdown
	// const [showDropdown, setShowDropdown] = useState(true);
	// return (
	// 	<div>
	// 		<button
	// 			onClick={() => {
	// 				setShowDropdown(!showDropdown);
	// 			}}
	// 		>
	// 			TOGGLE DROPDOWN
	// 		</button>

	// 		{showDropdown ? (
	// 			<Dropdown colorOptions={options} selected={selected} onSelectChange={setSelected} />
	// 		) : (
	// 			' '
	// 		)}
	// 	</div>
	// );

	return (
		<div>
			<Header />
			<Route path="/">
				<Accordion items={items}></Accordion>
			</Route>
			<Route path="/list">
				<Search></Search>
			</Route>
			<Route path="/dropdown">
				<Dropdown
					selected={selected}
					onSelectChange={setSelected}
					label="Select a color"
					options={options}
				></Dropdown>
			</Route>
			<Route path="/translate">
				<Translate></Translate>
			</Route>
		</div>
	);
};

export default App;