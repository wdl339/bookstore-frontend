
let websocket = null;

let openWebSocket = (url, handleEvent) => {
    if (typeof (WebSocket) == "undefined") {
        alert("您的浏览器不支持WebSocket");
    } else {
        if (websocket != null) {
            return;
        }

        websocket = new WebSocket(url);
        websocket.onopen = function () {
            console.log('websocket 连接成功');
        }
        websocket.onerror = function () {
            console.log('websocket 连接发生错误');
        };
        websocket.onclose = function () {
            console.log('websocket 连接关闭');
        }
        websocket.onmessage = function (message) {
            console.log('websocket 收到消息:' + message.data);
            handleEvent(message.data);
        }
    }
}


let closeWebSocket=()=> {
    if (websocket === null || websocket === undefined) {
        alert("未建立连接");
        return;
    }
    websocket.close();
    websocket = null;
}

export { closeWebSocket, openWebSocket, websocket };

