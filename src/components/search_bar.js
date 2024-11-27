import { Input } from 'antd';
import React from 'react';
const { Search } = Input;

function SearchBar({ onSearch, placeholder = "输入书名查询" }) {
    return (
        <Search
            placeholder={placeholder}
            onSearch={onSearch}
            allowClear
            enterButton="搜索"
            size="large"
        />
    );
}

export default SearchBar;