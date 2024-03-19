import { Modal } from 'antd';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookDetailCard from "../components/book_detail_card";
import OrderForm from "../components/order_form";
import '../css/book_detail.css';
import '../css/global.css';

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

    useEffect(() => {
        const book0 = {
            id : id,
            title: `Title ${id}`,
            author: `author ${id}`,
            description: `Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description ${id}`,
            price: id * 4.5,
            cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            sales: id,
        }

        setBook(book0);
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