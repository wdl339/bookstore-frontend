import { Button, Col, Input, Modal, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BookCreateTable from '../components/book_create_table';
import BookManageTable from '../components/book_manage_table';
import SearchBar from '../components/search_bar';
import '../css/global.css';
import { getAllBooks } from '../service/book';

const { Search } = Input;

function BookManage (){
  const [books, setBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const showModal = () => {
      setIsModalOpen(true);
  };
  const onCancel = () => {
      setIsModalOpen(false);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const pageIndex = searchParams.get("pageIndex") != null ? Number.parseInt(searchParams.get("pageIndex")) : 0;
  const pageSize = searchParams.get("pageSize") != null ? Number.parseInt(searchParams.get("pageSize")) : 5;

  useEffect(() => {
    setAllBooks();
  }, [searchParams]);

  const setAllBooks = async () => {
    let books = await getAllBooks(keyword, pageIndex, pageSize);
    if (books) {
      setBooks(books.books);
      setTotal(books.total);
    }
  }

  const onSearch = (keyword) => {
    setSearchParams({
      "keyword": keyword,
      "pageIndex": 0,
      "pageSize": 5
    });
  }

  const onPageChange = (page) => {
    setSearchParams({ ...searchParams, pageIndex: page - 1 });
  }

  return (
    <div className='content-background'>
        <div className='content-container'>
            <Modal 
              title="添加新书" 
              open={isModalOpen} 
              onCancel={onCancel}  
              onOk={onCancel}
              footer={null}
            >
              <BookCreateTable/>
            </Modal>

            <Row>
                <Col span={20}>
                  <SearchBar onSearch={onSearch} />
                </Col>
                <Col span={4}>
                  <Button
                    type="primary"
                    size="large"
                    style={{width: '80%'}}
                    onClick={() => showModal()}
                  >
                    添加新书
                  </Button>
                </Col>
            </Row>

            {books.length ? 
              <BookManageTable 
                books={books}
                pageSize={pageSize}
                current={pageIndex + 1}
                total={total}
                onPageChange={onPageChange}
              />
              :
              <p>暂无订单</p>
            }
        </div>
    </div>
  );
};

export default BookManage;