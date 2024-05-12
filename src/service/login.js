import { PREFIX, post, put } from "./common";

export async function register(name, password, phone, email) {
    const url = `${PREFIX}/user/register`;
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
    const url = `${PREFIX}/user/login`;
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
    const url = `${PREFIX}/user/logout`;
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