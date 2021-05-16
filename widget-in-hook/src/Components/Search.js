import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	// 	当input中的value有change的时候更新state(searchTerm)
	const onTermChange = (event) => {
		setSearchTerm(event.target.value);
	};

	// 	使用useEffect function确保在searchTerm发生变化的时候make a request
	// 	在user press the key, we want to do a search
	useEffect(() => {
		// 		make a request to wiki whenever user enters character
		const searchTermFunc = async () => {
			const response = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					format: 'json',
					origin: '*',
					srsearch: searchTerm,
				},
			});
			setSearchResults(response.data.query.search);
			console.log(response.data.query.search)
		};

		const timeoutID = setTimeout(() => {
			// 		如果searchTerm 为空的时候，不搜索，避免报错
			if (searchTerm) {
				searchTermFunc();
			}
		}, 500);

		return () => {
			clearTimeout(timeoutID);
		};
	}, [searchTerm]);

	const renderedList = searchResults.map((searchResult) => {
		return (
			<div key={searchResult.pageid} className="item">
				<div className="right floated content">
					<a
						className="ui button"
						href={`https://en.wikipedia.org?curid={searchResult.pageid}`}
					>
						Go
					</a>
				</div>
				<div className="content">
					<div className="header">{searchResult.title}</div>
					<span dangerouslySetInnerHTML={{ __html: searchResult.snippet }}></span>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input className="input" onChange={onTermChange} value={searchTerm} />
				</div>
			</div>
			<div className="ui celled list">{renderedList}</div>
		</div>
	);
};

export default Search;