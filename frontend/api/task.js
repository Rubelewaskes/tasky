/* eslint-disable */
import { Task } from './URLS';
import { sendRequest } from '.';

export async function newTask(data) {
  try {
    const res = await sendRequest('post', Task, data);
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

export async function getTasks(data) {
  try {
    const res = await sendRequest('get', Task, data);
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