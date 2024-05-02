import { getJson } from "./common";

export async function getUser() {
    const url = `https://10.119.12.209:8080/api/user/me`;
    let result;

    try {
        result = await getJson(url);
    } catch (e) {
        console.log(e);
    }

    return result;
}

export async function getProfile() {
    let result;

    result = {
        name: "张三",
        email: "123@qq.com",
        avatar: "http://localhost:3000/avatar.jpg",
        phone: "12345678901",
        address: "江川路800号上海交通大学",
        balance: 100,
        level: 1,
        description: "这是一个有趣的人"
    }

    return result;
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