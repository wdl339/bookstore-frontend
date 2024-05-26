import { DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import RankChart from '../components/rank_chart';
import { RankStatistics } from '../components/statistics';
import '../css/global.css';
import { getTopBooks, getTopUsers } from '../service/rank';
import { getUserRankData } from '../service/user';
const { RangePicker } = DatePicker;

function WebData(){
    const [books, setBooks] = useState([]);
    const [users, setUsers] = useState([]);

    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    let dataBook = books.map(book => ({
        y: book.sales,
        x: book.title,
    }));

    let dataUser = users.map(user => ({
        y: user.number,
        x: user.name,
    }));

    useEffect(() => {
        setTopBooks();
        setTopUsers();
    }, [startTime, endTime]);

    const setTopBooks = async () => {
        let allBooks = await getTopBooks(startTime, endTime, 10);
        // console.log(allBooks);
        if (allBooks) {
            setBooks(allBooks);
            dataBook = allBooks.map(book => ({
                y: book.sales,
                x: book.title,
            }));
        }
    }

    const setTopUsers = async () => {
        let allUsers = await getTopUsers(startTime, endTime, 10);
        if (allUsers) {
            setUsers(allUsers);
            dataUser = allUsers.map(user => ({
                y: user.number,
                x: user.name,
            }));
        }
    }

    const onChange = (value, dateString) => {
        console.log('Formatted Selected Time: ', dateString);
        setStartTime(dateString[0]);
        setEndTime(dateString[1]);
    };

    const onOk = (value) => {
        console.log('onOk: ', value);
    };

    return (
        <div className='content-background'>
            <div className='content-container'>
                <RangePicker
                    showTime={{
                        format: 'HH:mm:ss',
                    }}
                    format="YYYY-MM-DDTHH:mm:ss"
                    onChange={onChange}
                    onOk={onOk}
                />
                {books.length !== 0 ? <RankChart data={dataBook} yTitle={'销售量'} title={"热销榜"}/> : 
                    <div>所选时间段内热销榜无书</div>}
                {users.length !== 0 ? <RankChart data={dataUser} yTitle={'购书量'} title={"消费榜"}/> :
                    <div>所选时间段内消费榜无用户</div>}
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
                <RankStatistics orders={orders}/>
            </div>
        </div>
    );
}

export { MyData, WebData };

