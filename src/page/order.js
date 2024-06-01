import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import OrderTable from '../components/order_table';
import SearchBar from '../components/search_bar';
import TimeRangePicker from '../components/time_range_picker';
import '../css/global.css';
import { getOrders } from '../service/order';

function Order (){
  const [orders, serOrders] = useState([]);
  const [total, setTotal] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const pageIndex = searchParams.get("pageIndex") != null ? Number.parseInt(searchParams.get("pageIndex")) : 0;
  const pageSize = searchParams.get("pageSize") != null ? Number.parseInt(searchParams.get("pageSize")) : 5;

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    setOrderItems();
  }, [searchParams, startTime, endTime]);

  const setOrderItems = async () => {
    let orders = await getOrders(keyword, pageIndex, pageSize, startTime, endTime);
    if (orders) {
      serOrders(orders.orders);
      setTotal(orders.total);
    }
  }

  const onSearch = (keyword) => {
    setSearchParams({
      "keyword": keyword,
      "pageIndex": 0,
      "pageSize": 5
    });
  }

  const onPageChange = (page) => {
    setSearchParams({ ...searchParams, pageIndex: page - 1 });
  }

  const onTimeChange = (value, dateString) => {
    console.log('Formatted Selected Time: ', dateString);
    setStartTime(dateString[0]);
    setEndTime(dateString[1]);
  };

  const onTimeOk = (value) => {
      console.log('onOk: ', value);
  };

  return (
    <div className='content-background'>
        <div className='content-container'>

            <Row>
                <Col span={12}>
                  <SearchBar onSearch={onSearch} />
                </Col>
                <Col span={1}/>
                <Col span={10}>
                  <TimeRangePicker onTimeChange={onTimeChange} onTimeOk={onTimeOk}/>
                </Col>
            </Row>

            {orders.length ? 
              <OrderTable 
                orders={orders}
                pageSize={pageSize}
                current={pageIndex + 1}
                total={total}
                onPageChange={onPageChange}
              />
              :
              <p>暂无订单</p>
            }
        </div>
    </div>
  );
};

export default Order;