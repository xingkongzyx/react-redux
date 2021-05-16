import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectChange, label }) => {
	// 	open state用于确定此时是否应该展开/关闭菜单（也就是添加visible class）
	//  默认为false时不添加visible class
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)) {
				// 如果被点击的element被包含在component中(通过ref.current表示)
				// 则提前返回
				return;
			}
			// 如果被点击的element不包含在component中
			// 设定open state为false,说明不显示dropdown menu
			setOpen(false);
		};

		// 当component first render, 在body element上绑定event handler，
		// 并且只需要绑定一次(第二个参数为[]搞定)
		document.body.addEventListener('click', onBodyClick, { capture: true });

		// 	clean up code
		return () => {
			document.body.removeEventListener('click', onBodyClick, {
				capture: true,
			});
		};
	}, []);

	const renderedOptions = options.map((option) => {
		if (option.label === selected.label) {
			// 	目前已经选择的选项不在list中出现
			return null;
		}

		// 	当user点击某个option的时候，通过onclick handler调用传
		// 入的onSelectChange function props从而
		// 	update state values(特指selected)并且使得整个component
		// rerender,在rerender后新的
		// 	selected state variable会传入到Dropdown并且显示对应的值
		return (
			<div
				className="item"
				key={option.value}
				onClick={() => {
					onSelectChange(option);
				}}
			>
				{option.label}
			</div>
		);
	});

	return (
		<div className="ui form" ref={ref}>
			<div className="field">
				<label className="label">{label}</label>
				<div
					onClick={() => {
						setOpen(!open);
					}}
					className={`ui selection dropdown ${open ? 'visible active' : ''}`}
				>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
			{window.location.pathname === '/dropdown' ? (
				<div className="field">
					<h3 style={{ color: selected.value }}>This is a text</h3>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Dropdown;