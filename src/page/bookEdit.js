import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookEditTable from '../components/book_edit_table';
import '../css/global.css';
import { getBookById } from '../service/book';

function BookEdit() {
    const [info, setInfo] = useState();

    let { id } = useParams();

    const setBook = async () => {
        let book = await getBookById(id);
        if (book) {
            setInfo(book);
        }
    }

    useEffect(() => {
        setBook();
      }, []);

    return (
        <div className='content-background'>
            <div className='detail-container'>
                <BookEditTable
                    info={info} bookId={id}
                />
            </div>
        </div>
    );
}

export default BookEdit;