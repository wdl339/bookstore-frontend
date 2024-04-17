import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import '../css/cart.css';
import '../css/global.css';
import CartTable from './cart_table';
import OrderForm from './order_form';
import { CartStatistics } from './statistics';

function CartBody({books, setBooks}) {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const onCancel = () => {
        setIsModalOpen(false);
        setSelectedRowKeys([]);
      };
    
      const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
      };
    
      const onNumberChange = (id, newNumber) => {
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
            onOk={onCancel} 
            footer={null}
        >
            <OrderForm></OrderForm>
        </Modal> ,

        <>
            {books.length === 0? 
                <p>购物车为空</p> :
                <CartTable 
                    rowSelection={{
                        selectedRowKeys,
                        onChange: onSelectChange,
                    }}
                    books={books} 
                    onNumberChange={onNumberChange} 
                    onDelete={onDelete}
                />
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