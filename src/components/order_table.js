import { Table } from 'antd';
import React from 'react';
import { getTimeStr } from '../util/time';
import BookCartCard from './book_cart_card';

function OrderTable({orders}) {

    const columns = [
        {
          title: '信息',
          dataIndex: ['item','book'],
          render : book => <BookCartCard book={book}/>
        },
        {
          title: '单价',
          dataIndex: ['item','book','price'],
        },
        {
          title: '数量',
          dataIndex: ['item','number'],
        },
        {
            title: '总价',
            dataIndex: '',
            render: (text, record) => record.item.number * record.item.book.price,
            sorter: (a, b) => a.item.number * a.item.book.price - b.item.number * b.item.book.price,
        },
        {
            title: '收件人',
            dataIndex: 'receiver',
        },
          {
            title: '联系方式',
            dataIndex: 'tel',
          },
          {
            title: '收货地址',
            dataIndex: 'address',
          },
          {
            title: '下单时间',
            dataIndex: 'createAt',
            render: time => getTimeStr(time),
          },
    ];
    
    return (
        <Table 
            columns={columns} 
            dataSource={orders} 
            pagination={{ 
                pageSize: 5, 
                position: ['bottomCenter']
            }} 
        />
    );
}

export default OrderTable;