import { Button, Modal, message } from 'antd';
import React, { useState } from 'react';
import '../css/cart.css';
import '../css/global.css';
import { changeItemNumber, deleteItemFromCart } from '../service/cart';
import { submitOrderFromCart } from '../service/order';
import { onResponse, onStrResponse } from '../util/response';
import { closeWebSocket } from '../util/websocket';
import CartTable from './cart_table';
import OrderForm from './order_form';
import { CartStatistics } from './statistics';

function CartBody({books, setBooks, setCartItems}) {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

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

      const numberChangeOk = (id, newNumber) => {
        const newBooks = books.map(item => {
          if (item.id === id) {
            item.number = newNumber;
          }
          return item;
        });
        setBooks(newBooks);
      }
    
      const onNumberChange = async (id, newNumber) => {
        let res = await changeItemNumber(id, newNumber);
        onResponse(res, messageApi, () => numberChangeOk(id, newNumber), null);
      }

      const deleteOk = (id) => {
        const newBooks = books.filter(item => item.id !== id);
        setBooks(newBooks);
        const newSelectedRowKeys = selectedRowKeys.filter(key => key !== id);
        setSelectedRowKeys(newSelectedRowKeys);
      }
    
      const onDelete = async (id) => {
        let res = await deleteItemFromCart(id);
        onResponse(res, messageApi, () => deleteOk(id), null);
      }

      const handleOrderResult = (message) => {
        onStrResponse(message, messageApi, setCartItems, null, 2);
        closeWebSocket();
      }

      const onSubmitOrder = async (values) => {
        const data = {
          receiver: values.receiver,
          phone: values.phone,
          address: values.address,
          itemIds: selectedRowKeys,
        };
        submitOrderFromCart(data, handleOrderResult).then(response => {
          setIsModalOpen(false);
          setSelectedRowKeys([]);
          if (!response.ok){
              alert('订单请求失败:', response.error);
          }
        });
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
              onSubmit={onSubmitOrder}
            />
        </Modal> ,

        <>
          {contextHolder}
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