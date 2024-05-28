import { PREFIX, getJson, post, put } from './common';

export async function getAllActiveBooks(keyword) {
    const url = `${PREFIX}/books?keyword=${keyword}`;
    let res;

    try {
        res = await getJson(url);
    } catch (e) {
        console.log(e);
        res = null;
    }

    return res;
}

export async function getAllBooks(keyword) {
    const url = `${PREFIX}/books/all?keyword=${keyword}`;
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

export async function createBook(data) {
    const url = `${PREFIX}/books`;
    let res;

    try {
        res = await post(url, data);
    } catch (e) {
        console.log(e);
        res = null;
    }

    return res;
}

export async function hideBook(id) {
    const url = `${PREFIX}/books/${id}/hide`;
    let res;

    try {
        res = await put(url);
    } catch (e) {
        console.log(e);
        res = null;
    }

    return res;
}

export async function updateBook(id, data) {
    const url = `${PREFIX}/books/${id}`;
    let res;

    try {
        res = await put(url, data);
    } catch (e) {
        console.log(e);
        res = null;
    }

    return res;
}