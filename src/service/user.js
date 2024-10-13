import { enryptPassword } from '../util/crypto';
import { DUMMY_RESPONSE, getJson, PREFIX, put } from './common';

export function getLocalUsername() {
    return localStorage.getItem('username');
}

export async function getProfile() {
    const url = `${PREFIX}/user/profile`;
    let me = null;

    try {
        me = await getJson(url);
        console.log(me);
    } catch(e) {
        console.log(e);
    }
    
    return me;
}

export async function updateProfile(data) {
    const url = `${PREFIX}/user/profile`;
    let result;

    try {
        result = await put (url, data);
    } catch(e) {
        console.log(e);
        result = DUMMY_RESPONSE;
    }

    return result;
}

export async function changePassword(oldPassword, newPassword) {
    const url = `${PREFIX}/user/password`;
    let result;

    oldPassword = await enryptPassword(oldPassword);
    newPassword = await enryptPassword(newPassword);

    try {
        result = await put (url, { oldPassword, newPassword });
    } catch(e) {
        console.log(e);
        result = DUMMY_RESPONSE;
    }

    return result;
}

export async function getAvatar() {
    const url = `${PREFIX}/user/avatar`;
    let res = null;

    try {
        res = await getJson(url);
        console.log(res);
    } catch(e) {
        console.log(e);
    }

    return res;
}

export async function getAllUsers(keyword, page, size) {
    const url = `${PREFIX}/user/all?keyword=${keyword}&pageIndex=${page}&pageSize=${size}`;
    let users;
  
    try {
        users = await getJson(url);
        console.log(users);
    } catch (e) {
        console.log(e);
        users = [];
    }
  
    return users;
  }

export async function getUserRankData(startTime, endTime){
    const url = `${PREFIX}/orders/statistics?startTime=${startTime}&endTime=${endTime}`;
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

export async function getIsAdmin() {
    const url = `${PREFIX}/user/isAdmin`;
    let res = null;

    try {
        res = await getJson(url);
    } catch(e) {
        console.log(e);
    }

    return res;
}

export async function changeUserBanStatus(id, status) {
    const url = `${PREFIX}/user/${id}/ban`;
    let res;

    try {
        res = await put(url, status);
    } catch (e) {
        console.log(e);
        res = DUMMY_RESPONSE;
    }

    return res;
}