import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookDetailCard from "../components/book_detail_card";
import '../css/book_detail.css';
import '../css/global.css';

function BookDetail() {
    const [book, setBook] = useState();

    let { id } = useParams();

    useEffect(() => {
        const book0 = {
            id : id,
            title: `Title ${id}`,
            author: `author ${id}`,
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
                <div className='detail-container'>
                    <BookDetailCard book={book}/>
                </div>
            }
        </div>
    )
}

export default BookDetail;