import { DUMMY_RESPONSE, getJson, PREFIX, put } from './common';

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