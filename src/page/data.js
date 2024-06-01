import { DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import DataTable from '../components/data_table';
import RankChart from '../components/rank_chart';
import { RankStatistics } from '../components/statistics';
import TimeRangePicker from '../components/time_range_picker';
import '../css/global.css';
import { getTopBooks, getTopUsers } from '../service/rank';
import { getUserRankData } from '../service/user';

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
                <TimeRangePicker onTimeChange={onChange} onTimeOk={onOk}/>
                {books.length !== 0 ? <RankChart data={dataBook} yTitle={'销售量'} title={"热销榜"}/> : 
                    <div>所选时间段内热销榜无书</div>}
                {users.length !== 0 ? <RankChart data={dataUser} yTitle={'购书本数'} title={"消费榜"}/> :
                    <div>所选时间段内消费榜无用户</div>}
            </div>
        </div>
    );
}

function MyData(){
    const [datas, setDatas] = useState([]);

    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    useEffect(() => {
        setUserRankData();
    }, [startTime, endTime]);

    const setUserRankData = async () => {
        let allDatas = await getUserRankData(startTime, endTime);
        if (allDatas) {
            setDatas(allDatas);
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
                <h2>书籍购买数据统计</h2>
                <TimeRangePicker onTimeChange={onChange} onTimeOk={onOk}/>
                {datas.length !== 0 ? <DataTable datas={datas}/>
                    : <div>所选时间段内无购买数据</div>}
                <RankStatistics orders={datas}/>
            </div>
        </div>
    );
}

export { MyData, WebData };

