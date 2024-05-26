import { DUMMY_RESPONSE, PREFIX, getJson, post } from './common';

export async function getOrders() {
  const url = `${PREFIX}/orders`;
  let orders;

  try {
      orders = await getJson(url);
  } catch (e) {
      console.log(e);
      orders = [];
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