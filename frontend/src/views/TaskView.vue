<template>
    <div class="window">
      <div class="container">
        <textarea class="text-area-b" placeholder="Название задачи" v-model="taskInfo.name"></textarea>

        <div class="aut">
          <b>Автор: </b>
          {{ this.value }}
        </div>

        <textarea class="text-area-a" placeholder="Добавьте описание задачи" v-model="taskInfo.description"></textarea>

        <div class="pr">
          Процесс выполнения
        </div>

        <div class="yellow">
        </div>
      </div>

      <div class="right">
        <div class="vertical-line"></div>
        <div class="menu">
          <div class="pic">
            <img src="../../css/employee.svg" width="21" height="21" alt="SVG Image" />
          </div>
          <div class="text">Исполнители</div>
        </div>
        <div class="but">
          <div id="textFields">
            <!-- Здесь можно использовать директивы v-for для отображения списка исполнителей -->
          </div>
          <button class="button-secondary" id="addButton" @click="taskInfo">+ Добавить</button>
        </div>
        <hr />

        <div class="second">
          <div class="pic">
            <img src="../../css/time.svg" width="21" height="21" alt="SVG Image" />
          </div>
          <div class="text">
            Дедлайн:
            <div class="cal">
              <input
                type="date"
                style="
                  cursor: pointer;
                  border: none;
                  font-family: 'Montserrat';
                  font-weight: 500;
                  border-bottom: 1px solid #373737;
                  font-size: 15px;
                "
                name="Date"
                id="davaToday"
                v-model="taskInfo.endDate"
              />
            </div>
          </div>

          <div class="hard">
            <div class="pic">
              <img src="../../css/target.svg" width="21" height="21" alt="SVG Image" />
            </div>
            <div class="text">Сложность</div>
          </div>
          <select id="categorySelect" v-model="taskInfo.difficulty">
            <option value="Junior">Junior</option>
            <option value="Junior-Middle">Junior-Middle</option>
            <option value="Middle">Middle</option>
            <option value="Middle-Senior">Middle-Senior</option>
            <option value="Senior">Senior</option>
          </select>
        </div>

        <div class="final">
          <div class="pic">
            <img width="21" height="21" alt="SVG Image" />
          </div>
          <div class="text">Файлы</div>
          <div id="fileList"></div>

          <input type="file" id="fileToUpload" multiple />
          <label for="fileToUpload" class="file-upload-button">+ Добавить</label>
          <div class="send">
            <!-- Оставляем пустым, поскольку этот блок не содержит Vue-логики -->
          </div>
        </div>

        <div class="end">
          <div class="range-slider">
            <input class="range-slider__range" type="range" min="0" max="1000" step="100" v-model="taskInfo.points" />
            <input
              style="
                margin-left: 0px;
                margin-top: 15px;
                padding: 5px;
                font-family: 'Montserrat';
                font-weight: 500;
                border-radius: 10px;
                border: none;
                color: white;
                background-color: #fe9901;
              "
              type="text"
              id="rangeValue"
              v-model="taskInfo.points"
            />
          </div>
        </div>
        <button class="button-third" @click="task">Отправить</button>
      </div>
    </div>
  </template>

<script>
import { newTask } from '../../api/task'

export default {
  name: 'TaSk',
  async beforeMount () {
    try {
      this.value = localStorage.getItem('mail')
    } catch (e) {
      console.log(e)
    }
  },
  data () {
    return {
      taskInfo: {
        authorID: 1,
        name: '',
        description: '',
        endDate: '',
        executorsID: [1],
        difficulty: '',
        points: 0
      },
      value: ''
    }
  },
  methods: {
    async task () {
      try {
        await newTask(this.taskInfo)
      } catch (e) {
        console.log(e)
      }
    }
  }
}

</script>

<style>
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        background-image: linear-gradient(to left, #ffffff, #fff);
        box-sizing: border-box;
        font-family: 'Montserrat';
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh; /* Для вертикального центрирования */
    }

    .window{
        height: 628px;
        width: 1048px;
        background-color: #fff;
        text-align: center;
        border-radius: 25px;
    }

    .container{
        text-align: left;
        margin-left: 38px;
        margin-top: 33px;
    }

    .container .name{
        font-weight: 700;
        font-size: 48px;
        color: #0e2f91;
    }

    .container .aut{
        margin-left: 15px;
        font-weight: 500;
        font-size: 21px;
        color: #373737;
    }

    .container .text-area-a {

        margin-top: 22px;
        font-family: 'Montserrat';
        width: 550px;
        resize: none;
        padding:15px;
        border-radius:15px;
        border:0;
        box-shadow:4px 4px 10px rgba(0,0,0,0.06);
        height:167px;
        background-color:#cce5ff;
        font-size: 22px;
        font-weight: 500;
    }

    .container .text-area-b {
        margin-left: -15px;
        margin-top: -15px;
        font-family: 'Montserrat';
        width: 550px;
        resize: none;
        padding:15px;
        border-radius:15px;
        border:0;
        box-shadow:1px 1px 1px rgba(0,0,0,0.06);
        height:90px;
        font-weight: 700;
        font-size: 48px;
        color: #0e2f91;
        overflow: hidden;

    }

    .container .pr{
        margin-top: 17px;
        margin-left: 15px;
        font-weight: 700;
        font-size: 29px;
        color: #373737;
    }
    .yellow{
        margin-top: 13px;
        width: 415px;
        height: 200px;
        background-color: #fad468;
        border-radius: 15px;
        overflow-y: scroll;
        overflow-y: auto;
        box-shadow:4px 4px 4px rgba(0,0,0,0.06);

    }

    .checklist {
    font-family: 'Montserrat';
    padding-left: 15px;
    padding-top: 5px;
    }

    .step {
        margin-top: 10px;
    }

    label {
        display: inline-block;
        margin-left: 10px;
    }

    ul {
        list-style-type: none;
        margin-left: 20px;
    }

    ul li {
        margin-top: 7px;

    }

    button{
        font-family: 'Montserrat';
        font-weight: 600;
        background-color: #dcb32a;
        color: #fff;
        border: none;
        padding: 5px 7px;
        cursor: pointer;
        border-radius: 10px;
        margin-left: 30px;
        margin-top: 7px;
    }

    .yellow::-webkit-scrollbar {
        width: 20px;
        background-color: #fad468; /* Фоновый цвет полосы прокрутки */
        border-radius: 10px; /* Скругленные углы для ползунка */

    }

    /* Стилизация ползунка (бегунка) полосы прокрутки */
    .yellow::-webkit-scrollbar-thumb {
        width: 20px;
        background-color: #dcb32a; /* Цвет ползунка полосы прокрутки */
        border-radius: 10px; /* Скругленные углы для ползунка */
    }

    .text-area-a::-webkit-scrollbar-thumb{
        background-color: #799cfa; /* Цвет ползунка полосы прокрутки */
        width: 20px;
        border-radius: 20px; /* Скругленные углы для ползунка */
    }
    .text-area-a::-webkit-scrollbar {
        width: 20px;
        background-color: #cce5ff;; /* Фоновый цвет полосы прокрутки */
        border-radius: 20px; /* Скругленные углы для ползунка */
    }

    .remove-icon {
        font-weight: bold;
        margin-left: 6px;
        font-size: 100%;
        color: #373737;
        cursor: pointer;
        padding: 0px 4px; /* Поля вокруг текста кнопки */
    }

    .right{
        text-align: left;
        margin-top:-596px;
        margin-left: 665px;
    }

    .vertical-line {
        text-align: left;
        width: 2px; /* Ширина линии */
        height: 628px; /* Высота линии */
        background-color: #373737; /* Цвет линии */
        right: 0;
    }

    .menu{
        margin-top:-596px;
        margin-left:28px;
        font-weight: 700;
        font-size:20px;
    }

    .menu .pic{
        position: absolute;
        margin-top: 1px;

    }

    .menu .text{
        vertical-align: middle;

        margin-left: 28px;
        margin-bottom: -20px;
    }

    .but{
        margin-top: 30px;
    }

    input[type="text"] {
        margin-left: 28px;
        margin-bottom: 4px;
        width: 200px;
        background-color: #859be1; /* Цвет фона */
        color: #fff; /* Цвет текста */
        border: none; /* Убрать границу */
        padding: 7px 7px; /* Поля вокруг текста */
        border-radius: 10px; /* Скруглить углы */
    }

    .but ::placeholder {
        color: white;
        font-family: 'Montserrat';
    }

    .text-area-b::placeholder {
        color: #0e2f91;
    }

    .text-area-a::placeholder {
        color: #373737;
    }

    .button-secondary{
        background-color:#5382e4;
        margin-top: 0px;
        border-radius: 10px;
    }

    .remove-emp {
        vertical-align: middle;
        margin-left: 5px;

        font-weight: bold;
        color: #859be1;
        border: 2px solid #859be1; /* Добавляем границу, указываем цвет */
        border-radius: 5px; /* Для скругления углов */
        padding: 4px 8px; /* Поля вокруг текста кнопки */
        cursor: pointer;
    }

    hr {
        border: 0; /* Удаляем стандартную границу линии */
        margin-top: 18px;
        margin-left: 28px;
        height: 2px; /* Высота линии */
        width: 326px;
        background-color: #373737; /* Цвет линии */

    }

    .second{
        margin-top: 20px;
        margin-left:28px;
        font-weight: 700;
        font-size:20px;
    }

    .second .pic{
        position: absolute;
        margin-top: 1px;

    }

    .second .text{
        vertical-align: middle;
        font-size: 20px;
        margin-left: 28px;
        margin-bottom: -20px;
    }

    .cal{
        margin-left:115px;
        margin-top: -26px;
    }

    .hard{
        margin-top: 30px;
    }

    select {
        margin-left: 28px;
        margin-top: 28px;
        padding: 5px;
        font-family: 'Montserrat';
        font-weight: 500;
        border-radius: 10px;
        border: none;
        color: white;
        background-color: #fe9901;
    }

    .send{
        margin-top: 100px;
    }

    .button-third{
        background-color:#92d36e;
        margin-top: 0px;
        border-radius: 10px;
        font-size: 27px;
        font-weight: 600;
    }
</style>
