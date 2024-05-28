import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookDetail from "../page/book";
import BookEdit from '../page/bookEdit';
import BookManage from '../page/bookManage';
import Cart from "../page/cart";
import { MyData, WebData } from "../page/data";
import Home from "../page/home";
import Login from "../page/login";
import Order from "../page/order";
import OrderManage from '../page/orderManage';
import Profile from '../page/profile';
import UserManage from '../page/userManage';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} index/>
            <Route path="/login" element={<Login login={true}/>} />
            <Route path="/register" element={<Login login={false}/>} />
            <Route path="/book/:id" element={<BookDetail/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/order" element={<Order/>} />
            <Route path="/userManage" element={<UserManage/>} />
            <Route path="/orderManage" element={<OrderManage/>} />
            <Route path="/bookManage" element={<BookManage/>} />
            <Route path="/bookEdit/:id" element={<BookEdit/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/myData" element={<MyData/>} />
            <Route path="/webData" element={<WebData/>} />
            <Route path="/*" element={<Home />} />
        </Routes> 
    );
}

export default Router;