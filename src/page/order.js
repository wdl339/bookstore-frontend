import { DatePicker, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import OrderTable from '../components/order_table';
import '../css/global.css';
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
  const [orders, serOrders] = useState([]);

  useEffect(() => {
    serOrders(data);
  }, []);

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

            {orders.length === 0 ? 
              <p>暂无订单</p>
              :
              <OrderTable orders={orders}/>
            }
        </div>
    </div>
  );
};

export default Order;