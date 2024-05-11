import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookDetail from "../page/book";
import Cart from "../page/cart";
import { MyData, WebData } from "../page/data";
import Home from "../page/home";
import Login from "../page/login";
import Manage from '../page/manage';
import Order from "../page/order";
import Profile from '../page/profile';

function Router() {
    // const [user, setUser] = useState(false);
    // const checkUser = async () => {
    //     let res = await getUser();
    //     if (!res) {
    //         setUser(false);
    //         console.log('未登录');
    //     } else {
    //         setUser(true);
    //         console.log('已登录');
    //     }
    // }

    // useEffect(() => {
    //     checkUser();
    // }, []);

    return (
        // user ?
        <Routes>
            <Route path="/" element={<Home/>} index/>
            <Route path="/login" element={<Login login={true}/>} />
            <Route path="/register" element={<Login login={false}/>} />
            <Route path="/book/:id" element={<BookDetail/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/order" element={<Order/>} />
            <Route path="/manage" element={<Manage/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/myData" element={<MyData/>} />
            <Route path="/webData" element={<WebData/>} />
            <Route path="/*" element={<Home />} />
        </Routes> 
        //:
        // <Routes>
        //     <Route path="/login" element={<Login login={true}/>} />
        //     <Route path="/register" element={<Login login={false}/>} />
        //     <Route path="/*" element={<Login login={true}/>} />
        // </Routes>
    );
}

export default Router;