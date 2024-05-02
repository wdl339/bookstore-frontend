import { PREFIX, getJson } from './common';

export async function getAllBooks() {
    const url = `${PREFIX}/books`;
    let res;

    try {
        res = await getJson(url);
    } catch (e) {
        console.log(e);
        res = null;
    }

    return res;
}

export async function getBookById(id) {
    const url = `${PREFIX}/books/${id}`;
    let book;

    try {
        book = await getJson(url);
    } catch (e) {
        console.log(e);
        book = null;
    }

    return book;
}