import { closeWebSocket, openWebSocket } from '../util/websocket';
import { DUMMY_RESPONSE, PREFIX, WSPREFIX, getJson, post } from './common';

export async function getOrders(keyword, page, size, startTime, endTime) {
  const url = `${PREFIX}/orders?keyword=${keyword}&pageIndex=${page}&pageSize=${size}&startTime=${startTime}&endTime=${endTime}`;
  let orders;

  try {
      orders = await getJson(url);
  } catch (e) {
      console.log(e);
      orders = null;
  }

  return orders;
}

export async function getAllOrders(keyword, page, size, startTime, endTime) {
  const url = `${PREFIX}/orders/all?keyword=${keyword}&pageIndex=${page}&pageSize=${size}&startTime=${startTime}&endTime=${endTime}`;
  let orders;

  try {
      orders = await getJson(url);
  } catch (e) {
      console.log(e);
      orders = null;
  }

  return orders;
}

export async function submitOrderFromCart(data, handleOrderResult) {
  const url = `${PREFIX}/orders`;
  let res;

  try {
    const userId = localStorage.getItem('userId');
    openWebSocket(WSPREFIX + '/websocket/order/' + userId, handleOrderResult);
    res = await post(url, data);
  } catch (e) {
      console.log(e);
      res = DUMMY_RESPONSE;
      closeWebSocket();
  }

  return res;
}

export async function submitOrderFromBook(data, bookId, handleOrderResult) {
  const url = `${PREFIX}/orders/${bookId}`;
  let res;
  console.log(data);

  try {
      const userId = localStorage.getItem('userId');
      openWebSocket(WSPREFIX + '/websocket/order/' + userId, handleOrderResult);
      res = await post(url, data);
  } catch (e) {
      console.log(e);
      res = DUMMY_RESPONSE;
      closeWebSocket();
  }

  return res;
}