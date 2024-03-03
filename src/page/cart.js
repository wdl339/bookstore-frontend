import { Button, InputNumber, Modal, Table } from 'antd';
import React, { useState } from 'react';
import BookCartCard from '../components/book_cart_card';
import OrderForm from '../components/order_form';
import '../css/cart.css';
import '../css/global.css';


const data = []
for(var i = 1; i <= 10; i++){
    data.push({
        id : i,
        book : {
          id : i,
          title: `Title ${i}`,
          author: `author ${i}`,
          description: `Description ${i}`,
          price: i * 4.5,
          cover: `books/book${i}.jpg`,
          sales: i,
        },
        number: i,
    })
}

function Cart (){
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [books, setBooks] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const onOk = () => {
    setIsModalOpen(false);
    setSelectedRowKeys([]);
  };
  const onCancel = () => {
    setIsModalOpen(false);
    setSelectedRowKeys([]);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const onNumberChange = (id, newNumber) => {
    console.log('onNumberChange', id, newNumber);
    const newBooks = books.map(item => {
        if (item.book.id === id) {
          return { ...item, number: newNumber};
        } else {
          return item;
        }
      });
    setBooks(newBooks);
  }

  const onDelete = (id) => {
        console.log('onDelete', id);
        const newBooks = books.filter(item => item.book.id !== id);
        setBooks(newBooks);
    }
  
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const getTotalPrice = (selectedRowKeys) => {
    let totalPrice = 0;
    selectedRowKeys.forEach((key) => {
      const item = books.find(item => item.book.id === key);
      if (item) {
        totalPrice += item.book.price * item.number;
      }
    });
    return totalPrice;
  }

  const hasSelected = selectedRowKeys.length > 0;

  const columns = [
    {
      title: '信息',
      dataIndex: 'book',
      render : book => <BookCartCard book={book}/>
    },
    {
      title: '单价',
      dataIndex: ['book','price'],
    },
    {
      title: '数量',
      dataIndex: 'number',
      render: (number,item) => 
        <InputNumber 
          size="large" 
          min={1} 
          defaultValue={number} 
          value={number} 
          onChange={(newNumber) => {
              onNumberChange(item.book.id, newNumber);
          }} 
        />
    },
    {
      title: '金额',
      dataIndex: 'number',
      render: (number,item) => <span>{item.book.price * number}</span>,
    },
    {
      title: '操作',
      dataIndex: 'book',
      render: book => 
        <Button 
          type="primary" 
          onClick={() => {
            onDelete(book.id);
          }} 
          danger
          shape="round" 
        >
          删除
        </Button>,
    },
  ];

  return (
    <div className='content-background'>
        <div className='content-container'>
            <Modal 
              title="下单" 
              open={isModalOpen} 
              onCancel={onCancel}  
              onOk={onOk} 
              footer={null}
            >
                <OrderForm></OrderForm>
            </Modal>

            <Table 
              rowSelection={rowSelection} 
              columns={columns} 
              dataSource={books} 
              pagination={{ pageSize: 5 }} 
              rowKey={record => record.book.id}
            />
            
            <div className='buy-container'>
                {hasSelected?
                <p>已选书本：
                  <span className="red">
                    {selectedRowKeys.length}
                  </span>
                  类 &nbsp;&nbsp;&nbsp; 合计：
                  <span className="red">
                    {getTotalPrice(selectedRowKeys)}
                  </span>
                  元
                </p> 
                : <></>}
                <Button 
                  type="primary" 
                  onClick={showModal} 
                  disabled={!hasSelected}
                >
                    结算
                </Button>
            </div>
        </div>
    </div>
  );
};

export default Cart;