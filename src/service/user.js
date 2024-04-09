import { PREFIX, getJson } from "./common";

export async function getUser() {
    const url = `${PREFIX}/user/me`;
    let result;

    try {
        result = await getJson(url);
    } catch (e) {
        console.log(e);
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
