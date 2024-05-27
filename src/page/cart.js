import { Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CartBody from '../components/cart_body';
import '../css/cart.css';
import '../css/global.css';
import { getCart } from '../service/cart';

const { Search } = Input;

function Cart (){
  const [books, setBooks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const setCartItems = async () => {
    let cartItems = await getCart(keyword);
    if (cartItems) {
      setBooks(cartItems);
    }
  }

  const onSearch = (keyword) => {
    setSearchParams({
      "keyword": keyword,
    });
  }

  useEffect(() => {
    setCartItems();
  }, [searchParams]);

  return (
    <div className='content-background'>
        <div className='content-container'>
            <Search
                placeholder="输入书名查询"
                onSearch={onSearch}
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