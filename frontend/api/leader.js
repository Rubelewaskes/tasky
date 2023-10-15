/* eslint-disable */
import { Leader } from './URLS';
import { sendRequest } from '.';

export async function leaderTable() {
  try {
    const res = await sendRequest('get', Leader);
    return res;
  } catch (e) {
    return e.response.status;
  }
}
