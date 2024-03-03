
import { DatePicker } from 'antd';
import React, { useState } from 'react';
import RankChart from '../components/rank_chart';
import '../css/global.css';
const { RangePicker } = DatePicker;

const data0 = []
for(var i = 1; i <= 10; i++){
    data0.push({
          id : i,
          title: `Title ${i}`,
          author: `author ${i}`,
          description: `Description ${i}`,
          price: i * 4.5,
          cover: `books/book${i}.jpg`,
          sales: i,
    })
}

const data1 = []
for(var i = 1; i <= 10; i++){
    data1.push({
          id : i,
          nickName: `Sir ${i}`,
          balance: i * 100,
          number: i * 5,
    })
}

const data2 = []
for(var i = 1; i <= 10; i++){
    data2.push({
        id : i,
        book : {
          id : i,
          title: `Title ${i}`,
          author: `author ${i}`,
          description: `Description ${i}`,
          price: i * 4.5,
          cover: `books/book${i}.jpg`,
          sales: i,
        },
        number: i,
    })
}

function WebData(){
    const [books, setBooks] = useState(data0);
    const [users, setUsers] = useState(data1);

    const dataBook = books.map(book => ({
        y: book.sales,
        x: book.title,
    }));

    const dataUser = users.map(user => ({
        y: user.number,
        x: user.nickName,
    }));

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
                <RangePicker
                    showTime={{
                        format: 'HH:mm',
                    }}
                    format="YYYY-MM-DD HH:mm"
                    onChange={onChange}
                    onOk={onOk}
                    />
                <RankChart data={dataBook} yTitle={'销售量'} title={"热销榜"}/>
                <RankChart data={dataUser} yTitle={'购书量'} title={"消费榜"}/>
            </div>
        </div>
    );
}

function MyData(){
    const [orders,setOrders] = useState(data2);

    const dataOrder = orders.map(order => ({
        y: order.number,
        x: order.book.title,
    }));

    const totalBooks = orders.reduce((total, order) => total + order.number, 0);
    const totalPrice = orders.reduce((total, order) => total + order.book.price * order.number, 0);

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
                <RangePicker
                    showTime={{
                        format: 'HH:mm',
                    }}
                    format="YYYY-MM-DD HH:mm"
                    onChange={onChange}
                    onOk={onOk}
                    />
                <RankChart data={dataOrder} yTitle={'购买量'} title={"个人购买数据统计"}/>
                <h3>购书总本数：
                    <span className="red">{totalBooks}</span>
                    本 &nbsp;&nbsp;&nbsp; 总金额：
                    <span className="red">{totalPrice}</span>
                    元
                </h3> 
            </div>
        </div>
    );
}

export { MyData, WebData };

