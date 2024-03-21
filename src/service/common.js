export async function getJson(url) {
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "include",
    });
    return res.json();
}

export async function get(url) {
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "include",
    });
    return res;
}

export async function put(url, data){
    const res = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: "include",
    });
    return res.json();

}


export async function post(url, data) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: "include",
    });
    return res.json();
}

export const BASEURL = 'https://10.119.12.209:8080' ?? 'http://localhost:8080';
export const PREFIX = `${BASEURL}/api`;