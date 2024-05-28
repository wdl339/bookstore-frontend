import { DUMMY_RESPONSE, getJson, PREFIX, put } from './common';

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

export async function getAllUsers(keyword) {
    const url = `${PREFIX}/user/all?keyword=${keyword}`;
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