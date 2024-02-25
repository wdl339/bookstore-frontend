import { Image } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/cart.css';

function CartBookCard ({detail,cover,title}) {
    return(
        <div className='cart-book-detail'>
            <Image
                    alt = {detail}
                    src = {cover}
                />
            <div>
                <Link>{title}</Link>
                <br></br>
                <p>{detail}</p>
            </div>
        </div>
    );
};

export default CartBookCard;