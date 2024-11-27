import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BookList from '../components/book_list';
import SearchBar from '../components/search_bar';
import "../css/global.css";
import { getAllActiveBooks, getAllActiveBooksByTag, getAuthorByTitle } from '../service/book';

function Home() {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);

    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || "";
    const tag = searchParams.get("tag") || "";
    const pageIndex = searchParams.get("pageIndex") != null ? Number.parseInt(searchParams.get("pageIndex")) : 0;
    const pageSize = searchParams.get("pageSize") != null ? Number.parseInt(searchParams.get("pageSize")) : 10;

    useEffect(() => {
        setAllBooks();
    }, [searchParams]);

    const setAllBooks = async () => {
        if (tag) {
            let allBooks = await getAllActiveBooksByTag(tag, pageIndex, pageSize);
            if (allBooks) {
                setData(allBooks.books);
                setTotal(allBooks.total);
            }
        } else {
            let allBooks = await getAllActiveBooks(keyword, pageIndex, pageSize);
            if (allBooks) {
                setData(allBooks.books);
                setTotal(allBooks.total);
            }
        }
    }

    const onSearch = (keyword) => {
        setSearchParams({
            "keyword": keyword,
            "tag": "",
            "pageIndex": 0,
            "pageSize": 10
        });
    };

    const onTagSearch = (tag) => {
        setSearchParams({
            "keyword": "",
            "tag": tag,
            "pageIndex": 0,
            "pageSize": 10
        });
    };

    const searchAuthor = async (title) => {
        let res = await getAuthorByTitle(title);
        console.log(res);
        if (res.ok){
            message.success(res.message);
        } else {
            message.error(res.message);
        }
    }

    const onPageChange = (page) => {
        setSearchParams({ ...searchParams, pageIndex: page - 1 });
    }

    return (
        <div className="content-background">    
            <div className='content-container'>
                <SearchBar onSearch={onSearch}/>
                <SearchBar onSearch={onTagSearch} placeholder='选择标签搜索'/>
                <BookList 
                    data={data}
                    pageSize={pageSize}
                    current={pageIndex + 1}
                    total={total}
                    onPageChange={onPageChange}
                />
                <SearchBar onSearch={searchAuthor} placeholder='微服务：输入书名查询作者'/>
            </div>
        </div>
    );
}


export default Home;