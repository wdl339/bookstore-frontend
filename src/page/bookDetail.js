import { Image } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookDetailCard from "../components/book_detail_card";
import '../css/book_detail.css';
import '../css/global.css';

function BookDetail() {
    const [book, setBook] = useState(null);

    let { id } = useParams();

    useEffect(() => {
        const book0 = {
            id : id,
            title: `Title ${id}`,
            auther: `Auther ${id}`,
            description: `Description ${id}`,
            price: id * 4.5,
            cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            sales: id,
        }

        setBook(book0);
    }, [id]);

    

    return ( 
        <div className="content-background"> 
            {book &&    
                <div className='content-container'>
                    <div className='book-detail-container'>
                        <Image
                            alt = {book.title}
                            src = {book.cover}
                        />
                        <BookDetailCard book={book}></BookDetailCard>
                    </div>
                </div>
            }
        </div>
    )
}

export default BookDetail;