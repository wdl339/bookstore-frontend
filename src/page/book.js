import { Modal, message } from 'antd';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookDetailCard from "../components/book_detail_card";
import OrderForm from "../components/order_form";
import '../css/book_detail.css';
import '../css/global.css';
import { getBookById } from '../service/book';
import { submitOrderFromBook } from '../service/order';
import { onStrResponse } from '../util/response';
import { closeWebSocket } from '../util/websocket';

function BookDetail() {
    const [book, setBook] = useState();
    const [orderNum, setOrderNum] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const showModal = () => {
        setIsModalOpen(true);
    };
    
    const onOk = () => {
        setIsModalOpen(false);
    };

    let { id } = useParams();

    const getBook = async () => {
        let book = await getBookById(id);
        if (book) {
            setBook(book);
        }
    }

    const handleOrderResult = (message) => {
        onStrResponse(message, messageApi, null, null, 2);
        closeWebSocket();
    }

    const onSubmitOrder = async (values) => {
        const data = {
          receiver: values.receiver,
          phone: values.phone,
          address: values.address,
          number: orderNum,
        };
        await submitOrderFromBook(data, id, handleOrderResult).then(response => {
            setIsModalOpen(false);
            if (!response.ok) {
                alert(response.message);
            }
        });
    }

    useEffect(() => {
        getBook();
    }, [id]);

    return ( 
        <div className="content-background"> 
            {contextHolder}
            {book &&    
                <div className='detail-container'>
                    <BookDetailCard 
                        book={book} 
                        showModal={showModal}
                        setOrderNum={setOrderNum}
                    />
                    <Modal 
                        title="下单" 
                        open={isModalOpen} 
                        onCancel={onOk}  
                        onOk={onOk} 
                        footer={null}
                    >
                        <OrderForm
                            onSubmit={onSubmitOrder}
                        />
                    </Modal>
                </div>
            }
        </div>
    )
}

export default BookDetail;