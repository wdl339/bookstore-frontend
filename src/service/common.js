export async function getJson(url) {
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "include",
    });
    // console.log(res);
    if (res.status === 401) {
        console.log('Unauthorized');
        window.location.href = '/login';
        throw new Error('Unauthorized');
    }
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
    if (res.status === 401) {
        window.location.href = '/login';
        throw new Error('Unauthorized');
    }
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
    if (res.status === 401) {
        window.location.href = '/login';
        throw new Error('Unauthorized');
    }
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
    if (res.status === 401) {
        window.location.href = '/login';
        throw new Error('Unauthorized');
    }
    return res.json();
}

export async function del(url, data) {
    let res = await fetch(url, { 
        method: "DELETE", 
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(data),
        credentials: "include", 
    });
    if (res.status === 401) {
        window.location.href = '/login';
        throw new Error('Unauthorized');
    }
    return res.json();
}

export const BASEURL = 'http://localhost:8080';
export const PREFIX = `${BASEURL}/api`;
export const DUMMY_RESPONSE = {
    ok: false,
    message: "网络错误！"
}