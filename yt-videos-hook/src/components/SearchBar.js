import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState("");
    // 当用户更改input中信息时调用
    const onInputChange = (e) => {
        setTerm(e.target.value);
    };
    // 当用户提交表单时调用
    const onSubmit = (e) => {
        e.preventDefault();
        // 使用从App component中传入的callback
        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment" onSubmit={onSubmit}>
            <form className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={term}
                        placeholder="Please enter the keyword you want to search!"
                        // "onChange" is a special name for event handler
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
