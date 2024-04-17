import { DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import RankChart from '../components/rank_chart';
import '../css/global.css';
import { getTopBooks, getTopUsers } from '../service/rank';
import { getUserRankData } from '../service/user';
const { RangePicker } = DatePicker;

function WebData(){
    const [books, setBooks] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setTopBooks();
        setTopUsers();
    }, []);

    const setTopBooks = async () => {
        let allBooks = await getTopBooks();
        if (allBooks) {
            setBooks(allBooks);
        }
    }

    const setTopUsers = async () => {
        let allUsers = await getTopUsers();
        if (allUsers) {
            setUsers(allUsers);
        }
    }

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
                {books.length !== 0 && <RankChart data={dataBook} yTitle={'销售量'} title={"热销榜"}/>}
                {users.length !== 0 && <RankChart data={dataUser} yTitle={'购书量'} title={"消费榜"}/>}
            </div>
        </div>
    );
}

function MyData(){
    const [orders,setOrders] = useState([]);

    useEffect(() => {
        setUserRankData();
    }, []);

    const setUserRankData = async () => {
        let allOrders = await getUserRankData();
        if (allOrders) {
            setOrders(allOrders);
        }
    }

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
                {orders.length !== 0 && <RankChart data={dataOrder} yTitle={'购买量'} title={"个人购买数据统计"}/>}
                <h3>购书总本数：
                    <span className="red-big-text">{`${totalBooks}本`}</span>
                     &nbsp;&nbsp;&nbsp; 总金额：
                    <span className="red-big-text">{`${totalPrice}元`}</span>
                </h3> 
            </div>
        </div>
    );
}

export { MyData, WebData };

