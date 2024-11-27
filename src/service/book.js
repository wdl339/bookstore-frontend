import { MICROURL, PREFIX, getJson, post, put } from './common';

export async function getAllActiveBooks(keyword, page, size) {
    const url = `${PREFIX}/books?keyword=${keyword}&pageIndex=${page}&pageSize=${size}`;
    let res;

    try {
        res = await getJson(url);
    } catch (e) {
        console.log(e);
        res = null;
    }

    return res;
}

export async function getAllActiveBooksByTag(tag, page, size) {
    const url = `${PREFIX}/books/tag?tag=${tag}&pageIndex=${page}&pageSize=${size}`;
    let res;

    try {
        res = await getJson(url);
    } catch (e) {
        console.log(e);
        res = null;
    }

    return res;
}

export async function getAllBooks(keyword, page, size) {
    const url = `${PREFIX}/books/all?keyword=${keyword}&pageIndex=${page}&pageSize=${size}`;
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

export async function getAuthorByTitle(title) {
    const url = `${MICROURL}/getAuthorByTitle/${title}`;
    let res;

    try {
        res = await getJson(url);
    } catch (e) {
        console.log(e);
        res = "error";
    }

    return res;
}

export async function createBook(data) {
    const url = `${PREFIX}/books/create`;
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
    const url = `${PREFIX}/books/edit/${id}`;
    let res;

    try {
        res = await put(url, data);
    } catch (e) {
        console.log(e);
        res = null;
    }

    return res;
}