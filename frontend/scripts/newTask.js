import { testTask } from '../../Api/task';
    export default {
      name: 'Task',
      data() {
        return {
          userInfo: {
            userID: 1,
            descriprion: "" 
          },
        };
      },
      methods: {
        async task() {
          try {
            await testTask(this.userInfo);
          } catch (e) {
            console.log(e);
          }
        },
      },
    };