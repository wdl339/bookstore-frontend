import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import BookDetail from "../page/book";
import Cart from "../page/cart";
import { MyData, WebData } from "../page/data";
import Home from "../page/home";
import Login from "../page/login";
import Manage from '../page/manage';
import Order from "../page/order";
import { getUser } from '../service/user';

function Router() {
    const [user, setUser] = useState(null);
    const checkUser = async () => {
        let res = await getUser();
        if (!res) {
            setUser(null);
            console.log('未登录');
        } else {
            setUser(res);
            console.log('已登录');
        }
    }

    useEffect(() => {
        checkUser();
    }, []);

    return (
        user ?
        <Routes>
            <Route path="/" element={<Home/>} index/>
            <Route path="/login" element={<Login login={true}/>} />
            <Route path="/register" element={<Login login={false}/>} />
            <Route path="/book/:id" element={<BookDetail/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/order" element={<Order/>} />
            <Route path="/manage" element={<Manage/>} />
            <Route path="/myData" element={<MyData/>} />
            <Route path="/webData" element={<WebData/>} />
            <Route path="/*" element={<Home />} />
        </Routes> :
        <Routes>
            <Route path="/*" element={<Login />} />
        </Routes>
    );
}

export default Router;