import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import '../css/cart.css';
import '../css/global.css';
import { changeItemNumber } from '../service/cart';
import CartTable from './cart_table';
import OrderForm from './order_form';
import { CartStatistics } from './statistics';

function CartBody({books, setBooks, setCartItems}) {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const onCancel = () => {
        setIsModalOpen(false);
        setSelectedRowKeys([]);
      };

      const onOk = () => {
        setIsModalOpen(false);
        setSelectedRowKeys([]);
        setCartItems();
      };
    
      const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
      };
    
      const onNumberChange = async (id, newNumber) => {
        let res = await changeItemNumber(id, newNumber);
        if (res.ok) {
          const newBooks = books.map(item => {
            if (item.id === id) {
              item.number = newNumber;
            }
            return item;
          });
          setBooks(newBooks);
        }
      }
    
      const onDelete = (id) => {
            const newBooks = books.filter(item => item.book.id !== id);
            setBooks(newBooks);
            const newSelectedRowKeys = selectedRowKeys.filter(key => key !== id);
            setSelectedRowKeys(newSelectedRowKeys);
      }

      const hasSelected = selectedRowKeys.length > 0;

    return [
        <Modal 
            title="下单" 
            open={isModalOpen} 
            onCancel={onCancel}  
            footer={null}
        >
            <OrderForm 
              selectedRowKeys={selectedRowKeys}
              books={books}
              onOk={onOk}
            />
        </Modal> ,

        <>
            {books.length ? 
              <CartTable 
                  rowSelection={{
                      selectedRowKeys,
                      onChange: onSelectChange,
                  }}
                  books={books} 
                  onNumberChange={onNumberChange} 
                  onDelete={onDelete}
              /> :
                <p>购物车为空</p> 
            }
        </>,

        <div className='buy-container'>
            {hasSelected? <CartStatistics 
                            selectedRowKeys={selectedRowKeys}
                            books={books}
                            /> 
                : <></>}
            <Button 
                type="primary" 
                onClick={showModal} 
                disabled={!hasSelected}
            >
                结算
            </Button>
        </div>
    ];
}

export default CartBody;