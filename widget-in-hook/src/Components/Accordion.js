import React, { useState } from 'react';

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	// 	在title被点击时这个function被调用，index用于追踪是第几个title被点击
	const onTitleClick = (index) => {
		setActiveIndex(index);
	};

	const renderedItems = items.map((item, index) => {
		//  index与activeIndex比较，相同说明这个item正被点击，需要加入active class(style)
		const active = index === activeIndex ? 'active' : '';

		// 	产生a list of items in JSX
		return (
			<React.Fragment key={item.title}>
				<div
					className={`title ${active}`}
					onClick={() => {
						onTitleClick(index);
					}}
				>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});

	return (
		<div className="ui styled accordion">
			{renderedItems}
		</div>
	);
};

export default Accordion;