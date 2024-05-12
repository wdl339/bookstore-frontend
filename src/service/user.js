import { getJson, PREFIX } from './common';

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

export async function checkPassword(password) {
    // const url = `${PREFIX}/user/password`;
    let result;

    // try {
    //     const response = await post(url, { password });
    //     result = response.valid;
    // } catch (e) {
    //     console.log(e);
    // }

    if (password === '12345678')
        result = true;
    else
        result = false;

    return result;
}

export async function getAllUsers(){
    let result;

    result = [];

    for(var i = 1; i <= 10; i++){
        result.push({
            id : i,
            nickname: `Sir ${i}`,
            balance: i * 100,
            isBanned: false,
        })
    }

    return result;
}

export async function getUserRankData(){
    let result;

    result = [];

    for(var i = 1; i <= 10; i++){
        result.push({
            id : i,
            book : {
              id : i,
              title: `Title ${i}`,
              author: `author ${i}`,
              description: `Description ${i}`,
              price: i * 4.5,
              cover: `books/book${i}.jpg`,
              sales: i,
            },
            number: i,
        })
    }

    return result;
}