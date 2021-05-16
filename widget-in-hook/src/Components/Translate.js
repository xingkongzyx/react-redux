import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const Translate = () => {
	const translateOptions = [
		{
			label: 'Afrikaans',
			value: 'af',
		},
		{
			label: 'Arabic',
			value: 'ar',
		},
		{
			label: 'Hindi',
			value: 'hi',
		},
	];

	// 	传递给Dropdown部件的state variable，用于追踪用户在dropdown选择了哪种语言
	const [language, setLanguage] = useState(translateOptions[0]);
	// 用于追踪在input输入了什么的state variable，每输入新的字符就会update text state
	const [text, setText] = useState('');

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Text</label>
					<input
						value={text}
						onChange={(event) => {
							setText(event.target.value);
						}}
					/>
				</div>
			</div>
			<Dropdown
				options={translateOptions}
				selected={language}
				onSelectChange={setLanguage}
				label="Select Language"
			></Dropdown>
			<hr></hr>
			<h3 className="ui header">Output</h3>
			<Convert language={language} text={text} />
		</div>
	);
};

export default Translate;