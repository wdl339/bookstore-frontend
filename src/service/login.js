import { post, put } from "./common";

export async function login(username, password) {
    const url = `https://10.119.12.209:8080/api/login`;
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