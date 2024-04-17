import { DatePicker, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import OrderTable from '../components/order_table';
import '../css/global.css';
import { getOrderItems } from '../service/order';
const { RangePicker } = DatePicker;

const { Search } = Input;

function Order (){
  const [orders, serOrders] = useState([]);

  useEffect(() => {
    setOrderItems();
  }, []);

  const setOrderItems = async () => {
    let orderItems = await getOrderItems();
    if (orderItems) {
      serOrders(orderItems);
    }
  }

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