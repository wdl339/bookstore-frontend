import { DatePicker, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import OrderTable from '../components/order_table';
import '../css/global.css';
import { getOrders } from '../service/order';
const { RangePicker } = DatePicker;

const { Search } = Input;

function Order (){
  const [orders, serOrders] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  useEffect(() => {
    setOrderItems();
  }, [searchParams]);

  const setOrderItems = async () => {
    let orders = await getOrders(keyword);
    if (orders) {
      serOrders(orders);
    }
  }

  const onSearch = (keyword) => {
    setSearchParams({
      "keyword": keyword,
    });
  }

  // const onChange = (value, dateString) => {
  //   console.log('Selected Time: ', value);
  //   console.log('Formatted Selected Time: ', dateString);
  // };
  // const onOk = (value) => {
  //   console.log('onOk: ', value);
  // };

  return (
    <div className='content-background'>
        <div className='content-container'>
            <Search
                placeholder="输入书名查询"
                onSearch={onSearch}
                allowClear
                enterButton="搜索"
                size="large"
            />

            {/* <RangePicker
              showTime={{
                format: 'HH:mm',
              }}
              format="YYYY-MM-DD HH:mm"
              onChange={onChange}
              onOk={onOk}
            /> */}

            {orders.length ? 
              <OrderTable orders={orders}/>
              :
              <p>暂无订单</p>
            }
        </div>
    </div>
  );
};

export default Order;