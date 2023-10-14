/* eslint-disable */
import { Login } from './URLS';
import { sendRequest } from '.';
import router from '../src/router';

export async function toLogin(data) {
  try {
    const res = await sendRequest('post', Login, data);
    
    localStorage.setItem('login', res.data.login);
    localStorage.setItem('mail', res.data.mail);
    localStorage.setItem('id', res.data.token);

    router.push('/task');
    
    return res.data;
  } catch (e) {
    return e.response.status;
  }
}

export default {};