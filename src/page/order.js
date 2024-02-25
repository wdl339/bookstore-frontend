import { Input, Table } from 'antd';
import React, { useState } from 'react';
import CartBookCard from '../components/cart_book_card';
import '../css/global.css';
import { getTimeStr } from '../util/time';

const { Search } = Input;

const data = []
for(var i = 1; i <= 10; i++){
    data.push({
        "id": i,
        "receiver": `Sir ${i}`,
        "address": `Street ${i}`,
        "phone": `${i}0000000000`,
        "createTime": "2024-02-25T08:03:28.278Z",
        "book": {
            "id": i,
            "title": `Title ${i}`,
            "description": `Description ${i}`,
            "price": i * 4.5,
            "cover": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        },
        "number" : i,
        "sum" : i * 4.5 * i,
    })
}

function Order (){
  const [orders, serOrders] = useState(data);

  const columns = [
    {
      title: '信息',
      dataIndex: 'book',
      render : book => <CartBookCard detail={book.description} title={book.title} cover={book.cover}/>
    },
    {
      title: '单价',
      dataIndex: ['book','price'],
    },
    {
      title: '数量',
      dataIndex: 'number',
    },
    {
        title: '总价',
        dataIndex: 'sum',
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
        dataIndex: 'createTime',
        render: time => getTimeStr(time),
      },
  ];

  return (
    <div className='content-background'>
        <div className='content-container'>
            <Search
                placeholder="输入书名或时间查询"
                allowClear
                enterButton="搜索"
                size="large"
            />
            <Table columns={columns} dataSource={orders} pagination={{ pageSize: 5 }}/>
        </div>
    </div>
  );
};

export default Order;