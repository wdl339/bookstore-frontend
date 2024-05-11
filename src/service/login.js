import { PREFIX, post, put } from "./common";

export async function register(name, password, phone, email) {
    const url = `${PREFIX}/register`;
    let result;

    try {
        result = await post(url, { name, password, phone, email });
    } catch (e) {
        console.log(e);
        result = {
            ok: false,
            message: "网络错误！",
        }
    }
    return result;
}


export async function login(username, password) {
    const url = `${PREFIX}/login`;
    let result;

    try {
        result = await post(url, { username, password });
    } catch (e) {
        console.log(e);
        result = {
            ok: false,
            message: "网络错误！",
        }
    }
    return result;
}

export async function logout() {
    const url = `https://10.119.12.209:8080/api/logout`;
    let result;

    try {
        result = await put(url);
    } catch (e) {
        console.log(e);
        result = {
            ok: false,
            message: "网络错误！",
        }
    }

    return result;
}