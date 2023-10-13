import { Task } from './URLS';
import { sendRequest } from '.';
//import store from '../store';

// export async function getTask() {
//   try {
//     const data = {
//       team_id: '1',
//     };
//     const res = await sendRequest('get', Task, data);
//     return res.data;
//   } catch (e) {
//     return e.response.status;
//   }
// }

// export async function upTask(data) {
//   try {
//     const res = await sendRequest('patch', Task, data);
//     const dialog = {
//       action: '',
//       elProps: '',
//       value: false,
//     };
//     store.dispatch('dialog/openDialog', dialog, { root: true });
//     return res.data;
//   } catch (e) {
//     return e.response.status;
//   }
// }

// export async function newTask(data) {
//   try {
//     const res = await sendRequest('post', Task, data);
//     const dialog = {
//       action: '',
//       elProps: '',
//       value: false,
//     };
//     store.dispatch('dialog/openDialog', dialog, { root: true });
//     return res.data;
//   } catch (e) {
//     return e.response.status;
//   }
// }

export async function testTask(data) {
    try {
        console.log("Это сообщение будет выведено в консоль", data);
        const res = await sendRequest('post', Task, data);
        
        const dialog = {
          action: '',
          elProps: '',
          value: false,
        };
//        store.dispatch('dialog/openDialog', dialog, { root: true });
        return res.data;
      } catch (e) {
        return e.response.status;
      }
  }

export default {};