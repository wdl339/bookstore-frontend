export async function onResponse(res, messageApi, onSuccess, onFail, duration = 0.5) {
    if (res.ok) {
        await messageApi.open({
            type: 'success',
            content: res.message,
            duration: duration,
        });
        onSuccess?.();
    } else {
        await messageApi.open({
            type: 'error',
            content: res.message,
            duration: duration,
          });
        onFail?.();
    }
}

export async function onStrResponse(str, messageApi, onSuccess, onFail, duration = 0.5) {
    // 如果str开头为Failed，说明请求失败
    if (str.startsWith('Failed')) {
        await messageApi.open({
            type: 'error',
            content: str,
            duration: duration,
        });
        onFail?.();
    } else {
        await messageApi.open({
            type: 'success',
            content: str,
            duration: duration,
        });
        onSuccess?.();
    }
}

export async function onLoginResponse(res, messageApi, onSuccess, onFail, duration = 0.5) {
    if (res.ok) {
        await messageApi.open({
            type: 'success',
            content: "login success",
            duration: duration,
        });
        onSuccess?.();
    } else {
        await messageApi.open({
            type: 'error',
            content: res.message,
            duration: duration,
          });
        onFail?.();
    }
}