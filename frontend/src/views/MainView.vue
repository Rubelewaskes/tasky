<template>
  <body class="b">
    <div class="bad">
      <div class="wind">
          <div class="text-a">
              Авторизация
          </div>
          <textarea class="text-area-a" placeholder="Логин" v-model="userInfo.login"></textarea>
          <input type="password" id="passwordField" class="text-area-a" name="password" placeholder="Пароль" v-model="userInfo.password"/>
          <button class="btn1" id="vhod" @click="login">Войти</button>
          <button class="btn2" id="reg">Регистрация</button>
        </div>
        <div class="overlay"></div>
    </div>
    <header class='h'>
      <div class="headercontainer">
        <p class="logo">{{ name }}</p>
        <div class="lrbuttons">
            <div class="loginbutton">
              <v-btn id="showAuthButton">
                <p style="margin-top: 10px">{{ goIn }}</p>
              </v-btn>
            </div>
          <div class="regbutton">
            <p style="margin-top: 10px">{{ reg }}</p>
          </div>
        </div>
      </div>
    </header>
    <main class="intro">
      <div id="body" class="container">
        <div class="firstlook">
          <h1 class="discription">{{ discription }}</h1>
          <img src="../../img/1.png" class="demo" />
          <div class="trybutton">
            <p style="margin-top: 10px">{{ trybutton }}</p>
          </div>
        </div>
        <div class="functional">
          <div class="discription1">
            <p1>{{ subtitle }}</p1>
            <p2>{{ name }}</p2>
          </div>
          <div class="discription2">
            <p1>{{ subdiscription }}</p1>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>

<script>
import { toLogin } from '../../api/user'

export default {
  data () {
    return {
      userInfo: {
        login: '',
        password: ''
      },
      name: 'TASKY',
      goIn: 'Вход',
      reg: 'Регистрация',
      discription: 'Мы предлагаем новый взгляд на работу в команде.',
      trybutton: 'Попробовать',
      subtitle: 'Возможности',
      subdiscription:
        'Создавайте команды, работайте, соревнуйтесь, обучайтесь вместе!'
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
  },
  mounted () {
    document.getElementById('showAuthButton').addEventListener('click', function () {
      const wind = document.querySelector('.wind')
      const overlay = document.querySelector('.overlay')
      wind.classList.toggle('opened')
      overlay.classList.toggle('active')

      if (overlay.classList.contains('active')) {
        overlay.addEventListener('click', function (event) {
          if (event.target === overlay) {
            wind.classList.remove('opened')
            overlay.classList.remove('active')
          }
        })
      }
    })
  }
}

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sarina&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Poiret+One&display=swap");

.overlay {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: none;
}

.overlay.active {
    display: block;
}

.bad {
    display:flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
}

.wind {
    margin-top: 40%;
    position: fixed;
    z-index: 2;
    opacity: 0;
    transform: scale(0.5);
    transition: all 0.7s;
}

.opened {
    opacity: 1;
    transform: scale(1);
}

.b {
  font-family: "Montserrat", sans-serif;
  color: #1b1b1b;
  margin: 0;
  padding: 0;
}

.h {
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
  height: 72px;
  padding: 8px 0px 8px 0px;
  background: linear-gradient(
    to right,
    rgb(153, 102, 255) 0%,
    rgb(100, 142, 254) 100%
  );
}

.headercontainer {
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 1320px;
  height: 80px;
  display: inline-flex;
}

header .headercontainer .lrbuttons {
  width: 320px;
  height: 40px;
  display: inline-flex;
  margin-left: 1070px;
  margin-top: 15px;
}

header .headercontainer .lrbuttons .loginbutton {
  cursor: pointer;
  float: left;
  width: 100px;
  height: 40px;
  color: #ffffff;
  border-color: #ffffff;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  text-align: center;
}

header .headercontainer .lrbuttons .regbutton {
  float: left;
  margin-left: 20px;
  width: 200px;
  height: 40px;
  color: #ffffff;
  border-color: #ffffff;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  text-align: center;
}

header .headercontainer .logo {
  float: left;
  margin-left: 250px;
  width: 130px;
  height: 36px;
  color: #ffffff;
  font-family: "Sarina";
  font-weight: bold;
  font-size: 30px;
  text-align: left;
  margin-top: 15px;
}

.intro {
  width: 100%;
  height: 200vh;
  background-color: white;
  background-size: cover;
  padding-top: 20px;
}

.intro .container {
  width: 100%;
  margin: 20px auto;
  height: 95%;
}

.intro .container .firstlook {
  width: 100%;
  height: 335px;
  margin-left: 100px;
  display: grid;
  gap: 25px 25px;
  grid-template-columns: 48.8% 48.8%;
  grid-auto-rows: 200px;
}

.intro .container .firstlook .discription {
  margin-top: 58px;
  width: 780px;
  height: 200px;
  color: #000000;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 48px;
  line-height: 1.3;
  text-align: left;
}

.intro .container .firstlook .demo {
  width: 980px;
  height: 335px;
  border-radius: 15px 0px 0px 15px;
}

.intro .container .firstlook .trybutton {
  width: 218px;
  height: 50px;
  background: linear-gradient(
    to right,
    rgb(153, 102, 255) 0%,
    rgb(100, 142, 254) 98%
  );
  color: #ffffff;
  border-radius: 10px 10px 10px 10px;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 24px;
  line-height: 1.3;
  text-align: center;
}

.intro .container .functional {
  width: 100%;
  height: 335px;
  display: block;
  gap: 25px 25px;
  grid-template-columns: 48.8% 48.8%;
  grid-auto-rows: 200px;
}

.intro .container .functional .discription1 {
  width: 100%;
  height: 36px;
  margin: 40px 0px 0px 795px;
}

.intro .container .functional .discription1 p1 {
  width: 200px;
  height: 36px;
  color: #000000;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 26px;
  text-align: left;
}

.intro .container .functional .discription1 p2 {
  width: 130px;
  height: 36px;
  color: #648efe;
  font-family: "Sarina";
  font-weight: bold;
  font-size: 26px;
  text-align: right;
  margin-left: 10px;
}

.intro .container .functional .discription2 {
  width: 100%;
  height: 36px;
  margin: 0px 0px 0px 505px;
}

.intro .container .functional .discription2 p1 {
  width: 911px;
  height: 36px;
  color: #000000;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 26px;
  text-align: left;
}

.intro .gamelist .game {
  width: 100%;
  height: 100%;
  margin-top: 10px;
  background-color: #ffffff;
  border-radius: 15px;
}
.intro .gamelist .game img {
  width: 140px;
  height: 210px;
  float: left;
  margin-left: 3%;
  margin-top: 3.2%;
  object-fit: cover;
  border-radius: 15px;
}

.intro .gamelist .game .info {
  float: left;
  margin-top: 3.2%;
  margin-left: 3%;
  width: 50%;
  height: 90%;
}

.intro .gamelist .game .info h1 {
  float: top;
  margin-top: 0px;
  margin-bottom: 2px;
  font-size: 1em;
  color: #1b1b1b;
}

.intro .gamelist .game .info h2,
h3 {
  height: 10%;
  margin-top: 5px;
  margin-bottom: 2px;
  float: left;
  font-size: 0.9em;
}

.intro .gamelist .game .info h2 {
  width: 35%;
  font-weight: 300;
  color: #7a7a7a;
}
.intro .gamelist .game .info h3 {
  width: 60%;
  font-weight: 400;
  color: #1b1b1b;
}

.intro .gamelist .game .ratings {
  float: left;
  width: 13%;
  height: 90%;
  margin-top: 2.5%;
}

.intro .gamelist .game .ratings .grade {
  margin-top: 30%;
  border-radius: 20px;
  width: 100%;
  aspect-ratio: 1/1;
  background-color: #43a4ff;
  color: #ffffff;
  text-align: center;
  font-size: 25px;
  font-weight: 400;
  line-height: 320%;
}

.intro .gamelist .game .ratings .gradeUndefined {
  margin-top: 30%;
  border-radius: 20px;
  height: 34%;
  width: 100%;
  background-color: #7a7a7a;
  color: #ffffff;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  line-height: 320%;
}
</style>
