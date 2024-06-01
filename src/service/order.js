import { DUMMY_RESPONSE, PREFIX, getJson, post } from './common';

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

export async function submitOrderFromCart(data) {
  const url = `${PREFIX}/orders`;
  let res;

  try {
      res = await post(url, data);
  } catch (e) {
      console.log(e);
      res = DUMMY_RESPONSE;
  }

  return res;
}

export async function submitOrderFromBook(data, bookId) {
  const url = `${PREFIX}/orders/${bookId}`;
  let res;
  console.log(data);

  try {
      res = await post(url, data);
  } catch (e) {
      console.log(e);
      res = DUMMY_RESPONSE;
  }

  return res;
}