<template>
    <div>
    <label for="field1">Логин: </label>
    <input type="text" id="field1" v-model="userInfo.login" />

    <label for="field2">Пароль</label>
    <input type="password" id="field2" v-model="userInfo.password" />

    <button @click="login">Отправить</button>
  </div>
</template>

<script>
import { toLogin } from '../../api/user'

export default {
  name: 'LogIn',
  data () {
    return {
      userInfo: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      try {
        await toLogin(this.userInfo)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
