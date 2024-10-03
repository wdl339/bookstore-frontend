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