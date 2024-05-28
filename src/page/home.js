import Search from 'antd/es/input/Search';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BookList from '../components/book_list';
import "../css/global.css";
import { getAllActiveBooks } from '../service/book';

function Home() {
    const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || "";

    useEffect(() => {
        setAllBooks();
    }, [searchParams]);

    const setAllBooks = async () => {
        let allBooks = await getAllActiveBooks(keyword);
        if (allBooks) {
            setData(allBooks.books);
        }
    }

    const onSearch = (keyword) => {
        setSearchParams({
            "keyword": keyword,
        });
    };

    return (
        <div className="content-background">    
            <div className='content-container'>
              <Search 
                  placeholder="输入书名查询"
                  onSearch={onSearch}
                  allowClear
                  enterButton="搜索"
                  size="large"
              />
              <BookList data={data}/>
            </div>
        </div>
    );
}


export default Home;