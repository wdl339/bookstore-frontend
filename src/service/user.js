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

