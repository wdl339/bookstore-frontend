import Search from 'antd/es/input/Search';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BookList from '../components/book_list';
import "../css/global.css";
import { getAllActiveBooks } from '../service/book';
import SearchBar from '../components/search_bar';

function Home() {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);

    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || "";
    const pageIndex = searchParams.get("pageIndex") != null ? Number.parseInt(searchParams.get("pageIndex")) : 0;
    const pageSize = searchParams.get("pageSize") != null ? Number.parseInt(searchParams.get("pageSize")) : 10;

    useEffect(() => {
        setAllBooks();
    }, [searchParams]);

    const setAllBooks = async () => {
        let allBooks = await getAllActiveBooks(keyword, pageIndex, pageSize);
        if (allBooks) {
            setData(allBooks.books);
            setTotal(allBooks.total);
        }
    }

    const onSearch = (keyword) => {
        setSearchParams({
            "keyword": keyword,
            "pageIndex": 0,
            "pageSize": 10
        });
    };

    const onPageChange = (page) => {
        setSearchParams({ ...searchParams, pageIndex: page - 1 });
    }

    return (
        <div className="content-background">    
            <div className='content-container'>
                <SearchBar onSearch={onSearch}/>
                <BookList 
                    data={data}
                    pageSize={pageSize}
                    current={pageIndex + 1}
                    total={total}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    );
}


export default Home;