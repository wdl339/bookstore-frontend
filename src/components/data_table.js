import { Table } from 'antd';
import React from 'react';
import { BookCartCard } from './book_cart_card';

function DataTable({ datas}) {

    const columns = [
        {
          title: '信息',
          dataIndex: 'book',
          render : book => <BookCartCard book={book}/>
        },
        {
          title: '购买数量',
          dataIndex: 'number',
          sorter: (a, b) => a.number - b.number,
          defaultSortOrder: 'descend',
        },
        {
          title: '购买金额',
          dataIndex: 'price',
          render: price => `${price / 100}元`,
          sorter: (a, b) => a.price - b.price,
        },
    ];

    return (
        <Table 
            columns={columns} 
            dataSource={datas}
            pagination={{ 
                pageSize: 5, 
                position: ['bottomCenter']
            }} 
        />
    );
}

export default DataTable;