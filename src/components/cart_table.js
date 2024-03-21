import { Button, InputNumber, Table } from 'antd';
import React from 'react';
import BookCartCard from './book_cart_card';

function CartTable({ books,rowSelection,onNumberChange,onDelete}) {

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
        <Table 
            rowSelection={rowSelection} 
            columns={columns} 
            dataSource={books} 
            pagination={{ 
                pageSize: 5, 
                position: ['bottomCenter']
            }} 
            rowKey={record => record.book.id}
        />
    );
}

export default CartTable;