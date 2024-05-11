export async function onResponse(res, messageApi, onSuccess, onFail) {
    if (res.ok) {
        await messageApi.open({
            type: 'success',
            content: res.message,
            duration: 0.5,
        });
        onSuccess?.();
    } else {
        await messageApi.open({
            type: 'error',
            content: res.message,
            duration: 0.5,
          });
        onFail?.();
    }
}