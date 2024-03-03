import { DatePicker, Input, Table } from 'antd';
import React, { useState } from 'react';
import BookCartCard from '../components/book_cart_card';
import '../css/global.css';
import { getTimeStr } from '../util/time';
const { RangePicker } = DatePicker;

const { Search } = Input;

const data = []
for(var i = 1; i <= 10; i++){
    data.push({
        "id": i,
        "receiver": `Sir ${i}`,
        "address": `Street ${i}`,
        "tel": `${i}0000000000`,
        "createAt": "2024-02-25T08:03:28.278Z",
        "item": {
          "id" : i,
          "book": {
            "id": i,
            "title": `Title ${i}`,
            "author": `author ${i}`,
            "description": `Description ${i}`,
            "price": i * 4.5,
            "cover": `books/book${i}.jpg`,
            "sales": i,
          },
          "number" : i,
        }
    })
}

function Order (){
  const [orders, serOrders] = useState(data);

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

  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };
  const onOk = (value) => {
    console.log('onOk: ', value);
  };

  return (
    <div className='content-background'>
        <div className='content-container'>
            <Search
                placeholder="输入书名查询"
                allowClear
                enterButton="搜索"
                size="large"
            />
            <RangePicker
              showTime={{
                format: 'HH:mm',
              }}
              format="YYYY-MM-DD HH:mm"
              onChange={onChange}
              onOk={onOk}
            />
            <Table 
              columns={columns} 
              dataSource={orders} 
              pagination={{ pageSize: 5 }}
            />
        </div>
    </div>
  );
};

export default Order;