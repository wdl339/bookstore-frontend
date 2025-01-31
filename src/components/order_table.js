import { Table } from 'antd';
import React from 'react';
import { getTimeStr } from '../util/time';
import { BookOrderCardList } from './book_cart_card';

function OrderTable({orders, pageSize, current, total, onPageChange}) {

    const columns = [
        {
          title: '订单号',
          dataIndex: 'id',
        },
        {
          title: '信息',
          dataIndex: 'items',
          render : items => <BookOrderCardList items={items}/>
        },
        {
            title: '总价',
            dataIndex: 'totalPrice',
            render: totalPrice => totalPrice / 100,
        },
        {
            title: '收件人',
            dataIndex: 'receiver',
        },
          {
            title: '联系方式',
            dataIndex: 'phone',
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
                pageSize: pageSize,
                current: current,
                total: total,
                onChange: onPageChange,
                position: ['bottomCenter']
            }} 
        />
    );
}

export default OrderTable;