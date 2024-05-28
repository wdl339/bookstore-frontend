import { Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import OrderTable from '../components/order_table';
import '../css/global.css';
import { getAllOrders } from '../service/order';

const { Search } = Input;

function OrderManage(){
  const [orders, serOrders] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  useEffect(() => {
    setOrderItems();
  }, [searchParams]);

  const setOrderItems = async () => {
    let orders = await getAllOrders(keyword);
    if (orders) {
      serOrders(orders);
    }
  }

  const onSearch = (keyword) => {
    setSearchParams({
      "keyword": keyword,
    });
  }

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

            {orders.length ? 
              <OrderTable orders={orders}/>
              :
              <p>暂无订单</p>
            }
        </div>
    </div>
  );
};

export default OrderManage;