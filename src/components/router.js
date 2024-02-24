import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from "../page/books";
import Cart from "../page/cart";
import Home from "../page/home";
import Login from "../page/login";
import Order from "../page/order";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} index/>
                <Route path="/login" element={<Login/>} />
                <Route path="/books" element={<Books/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/order" element={<Order/>} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;