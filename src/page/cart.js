import { Input } from 'antd';
import React, { useEffect, useState } from 'react';
import CartBody from '../components/cart_body';
import '../css/cart.css';
import '../css/global.css';
import { getCart } from '../service/cart';

const { Search } = Input;

function Cart (){
  const [books, setBooks] = useState([]);

  const setCartItems = async () => {
    let cartItems = await getCart();
    if (cartItems) {
      setBooks(cartItems);
    }
  }

  useEffect(() => {
    setCartItems();
  }, []);

  return (
    <div className='content-background'>
        <div className='content-container'>
            <Search
                placeholder="输入书名查询"
                allowClear
                enterButton="搜索"
                size="large"
            />
            
            <CartBody books={books} setBooks={setBooks} setCartItems={setCartItems}/>
        </div>
    </div>
  );
};

export default Cart;