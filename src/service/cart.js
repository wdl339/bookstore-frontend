import { DUMMY_RESPONSE, PREFIX, del, getJson, post, put } from './common';

export async function getCart() {
    const url = `${PREFIX}/cart`;
    let cart;

    try {
        cart = await getJson(url);
    } catch (e) {
        console.log(e);
        cart = [];
    }

    return cart;
}

export async function addItemToCart(bookId, number) {
    const url = `${PREFIX}/cart`;
    let response;
    try {
        response = await post(url, { bookId, number });
    } catch (e) {
        console.log(e);
        response = DUMMY_RESPONSE;
    }
    return response;
}

export async function changeItemNumber(id, number) {
    const url = `${PREFIX}/cart/${id}?number=${number}`;
    let res;

    try {
        res = await put(url);
    } catch (e) {
        console.log(e);
        res = DUMMY_RESPONSE;
    }

    return res;
}

export async function deleteItemFromCart(id) {
    const url = `${PREFIX}/cart/${id}`;
    let res;

    try {
        res = await del(url);
    } catch (e) {
        console.log(e);
        res = DUMMY_RESPONSE;
    }

    return res;
}