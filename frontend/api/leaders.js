/* eslint-disable */
import { Leader } from './URLS';
import { sendRequest } from '.';

export async function leaderTable(data) {
  try {
    const res = await sendRequest('post', Leader, data);
    const dialog = {
      action: '',
      elProps: '',
      value: false,
    };
    store.dispatch('dialog/openDialog', dialog, { root: true });
    return res.data;
  } catch (e) {
    return e.response.status;
  }
}

export default {};