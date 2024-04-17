import { Button, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import CartTable from '../components/cart_table';
import OrderForm from '../components/order_form';
import '../css/cart.css';
import '../css/global.css';
import { getCartItems } from '../service/cart';

const { Search } = Input;

function Cart (){
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [books, setBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setCartItems = async () => {
    let cartItems = await getCartItems();
    if (cartItems) {
      setBooks(cartItems);
    }
  }

  useEffect(() => {
    setCartItems();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onOk = () => {
    setIsModalOpen(false);
    setSelectedRowKeys([]);
  };

  const onCancel = () => {
    setIsModalOpen(false);
    setSelectedRowKeys([]);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const onNumberChange = (id, newNumber) => {
    console.log('onNumberChange', id, newNumber);
    const newBooks = books.map(item => {
        if (item.book.id === id) {
          return { ...item, number: newNumber};
        } else {
          return item;
        }
      });
    setBooks(newBooks);
  }

  const onDelete = (id) => {
        console.log('onDelete', id);
        const newBooks = books.filter(item => item.book.id !== id);
        setBooks(newBooks);
        const newSelectedRowKeys = selectedRowKeys.filter(key => key !== id);
        setSelectedRowKeys(newSelectedRowKeys);
  }

  const getTotalPrice = (selectedRowKeys) => {
    let totalPrice = 0;
    selectedRowKeys.forEach((key) => {
      const item = books.find(item => item.book.id === key);
      if (item) {
        totalPrice += item.book.price * item.number;
      }
    });
    return totalPrice;
  }

  let rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div className='content-background'>
        <div className='content-container'>
            <Modal 
              title="下单" 
              open={isModalOpen} 
              onCancel={onCancel}  
              onOk={onOk} 
              footer={null}
            >
                <OrderForm></OrderForm>
            </Modal>

            <Search
                placeholder="输入书名查询"
                allowClear
                enterButton="搜索"
                size="large"
            />

            {books.length === 0? 
              <p>购物车为空</p>
              :
              <CartTable 
                rowSelection={rowSelection} 
                books={books} 
                onNumberChange={onNumberChange} 
                onDelete={onDelete}
              ></CartTable>
            }
            
            <div className='buy-container'>
                {hasSelected?
                <p>已选书本：
                  <span className="red-big-text">
                    {`${selectedRowKeys.length}类`}
                  </span>
                  &nbsp;&nbsp;&nbsp; 合计：
                  <span className="red-big-text">
                    {`${getTotalPrice(selectedRowKeys)}元`}
                  </span>
                </p> 
                : <></>}
                <Button 
                  type="primary" 
                  onClick={showModal} 
                  disabled={!hasSelected}
                >
                    结算
                </Button>
            </div>
        </div>
    </div>
  );
};

export default Cart;