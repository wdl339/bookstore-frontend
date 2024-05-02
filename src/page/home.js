import Search from 'antd/es/input/Search';
import React, { useEffect, useState } from 'react';
import BookList from '../components/book_list';
import "../css/global.css";
import { getAllBooks } from '../service/book';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setAllBooks();
    }, []);

    const setAllBooks = async () => {
        let allBooks = await getAllBooks();
        if (allBooks) {
            setData(allBooks.books);
        }
    }

    return (
        <div className="content-background">    
            <div className='content-container'>
              <Search 
                  placeholder="输入书名查询"
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