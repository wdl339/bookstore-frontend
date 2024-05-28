import { Button, Col, Input, Modal, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BookManageTable from '../components/book_manage_table';
import '../css/global.css';
import { getAllBooks } from '../service/book';
import BookCreateTable from '../components/book_create_table';

const { Search } = Input;

function BookManage (){
  const [books, setBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
      setIsModalOpen(true);
  };
  const onCancel = () => {
      setIsModalOpen(false);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  useEffect(() => {
    setAllBooks();
  }, [searchParams]);

  const setAllBooks = async () => {
    let books = await getAllBooks(keyword);
    if (books) {
      setBooks(books.books);
    }
  }

  const onSearch = (keyword) => {
    setSearchParams({
      "keyword": keyword,
    });
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
                  <Search
                      placeholder="输入书名查询"
                      onSearch={onSearch}
                      allowClear
                      enterButton="搜索"
                      size="large"
                  />
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
              <BookManageTable books={books}/>
              :
              <p>暂无订单</p>
            }
        </div>
    </div>
  );
};

export default BookManage;