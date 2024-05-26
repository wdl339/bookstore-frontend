import { getJson, PREFIX } from './common';

export async function getTopBooks(startTime, endTime, topNumber){
    const url = `${PREFIX}/books/rank?startTime=${startTime}&endTime=${endTime}&topNumber=${topNumber}`;
    let res;

    try {
        res = await getJson(url);
        console.log(res);
    } catch (e) {
        console.log(e);
        res = null;
    }

    return res;
}

export async function getTopUsers(startTime, endTime, topNumber){
    const url = `${PREFIX}/user/rank?startTime=${startTime}&endTime=${endTime}&topNumber=${topNumber}`;
    let res;

    try {
        res = await getJson(url);
        console.log(res);
    } catch (e) {
        console.log(e);
        res = null;
    }

    return res;
}