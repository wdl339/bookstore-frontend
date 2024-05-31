import { Button, Table } from 'antd';
import React from 'react';

function BookManageTable({books, pageSize, current, total, onPageChange}) {

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
            title: '书名',
            dataIndex: 'title',
          },
        {
            title: '封面',
            dataIndex: 'cover',
            render: cover => <img src={cover} alt='cover' style={{width: '100px'}}/>
        },
        {
            title: '作者',
            dataIndex: 'author',
        },
        {
            title: '描述',
            dataIndex: 'description',
        },
        {
            title: 'ISBN',
            dataIndex: 'isbn',
        },
        {
            title: '价格',
            dataIndex: 'price',
            render: price => price / 100,
        },
        {
            title: '销量',
            dataIndex: 'sales',
        },
        {
            title: '库存',
            dataIndex: 'stock',
        },
        {
            title: '是否可见',
            dataIndex: 'active',
            render: active => active ? '是' : '否',
        },
        {
            title: '操作',
            dataIndex: 'id',
            render: id => 
              <Button 
                type="primary" 
                onClick={() => {window.location.href = `/bookEdit/${id}`}}
                shape="round" 
              >
                操作
              </Button>,
        },
    ];
    
    return (
        <Table 
            columns={columns} 
            dataSource={books}
            pagination={{ 
                pageSize: pageSize,
                current: current,
                total: total,
                onChange: onPageChange,
                position: ['bottomCenter']
            }} 
        />
    );
}

export default BookManageTable;