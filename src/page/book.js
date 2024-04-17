import { Modal } from 'antd';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookDetailCard from "../components/book_detail_card";
import OrderForm from "../components/order_form";
import '../css/book_detail.css';
import '../css/global.css';
import { getBookById } from '../service/book';

function BookDetail() {
    const [book, setBook] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const onOk = () => {
        setIsModalOpen(false);
    };
    const onCancel = () => {
        setIsModalOpen(false);
    };

    let { id } = useParams();

    const getBook = async () => {
        let book = await getBookById(id);
        if (book) {
            setBook(book);
        }
    }

    useEffect(() => {
        getBook();
    }, [id]);

    return ( 
        <div className="content-background"> 
            {book &&    
                <div className='detail-container'>
                    <BookDetailCard 
                        book={book} 
                        showModal={showModal}
                    />
                    <Modal 
                        title="下单" 
                        open={isModalOpen} 
                        onCancel={onCancel}  
                        onOk={onOk} 
                        footer={null}
                    >
                        <OrderForm></OrderForm>
                    </Modal>
                </div>
            }
        </div>
    )
}

export default BookDetail;