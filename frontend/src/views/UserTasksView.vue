<template>
  <body>
    <!-- navbar -->
    <nav class="navbar">
      <div class="logo_item">
        <i class="bx bx-menu" id="sidebarOpen"></i>
        <img src="../../img/Vector.png" alt="" /><i>SecurityBritches</i>
      </div>

      <div class="search_bar">
        <input type="text" placeholder="Поиск" />
      </div>

      <div class="navbar_content">
        <i class="bi bi-grid"></i>
        <i class="bx bx-sun" id="darkLight"></i>
        <i class="bx bx-bell"></i>
        <img src="../../img/BodyIcon.png" alt="" class="profile" />
      </div>
    </nav>

    <!-- sidebar -->
    <nav class="sidebar">
      <div class="menu_content">
        <ul class="menu_items">
          <div class="menu_title menu_dahsboard"></div>
          <!-- duplicate or remove this li tag if you want to add or remove navlink with submenu -->
          <!-- start -->
          <li class="item">
            <div href="#" class="nav_link submenu_item">
              <span class="navlink_icon">
                <i class="bx bxl-microsoft-teams" style="transform: rotate(180deg);"></i>
              </span>
              <span class="navlink">Команда</span>
              <i class="bx bx-chevron-right arrow-left"></i>
            </div>

            <ul class="menu_items submenu">
              <a href="#" class="nav_link sublink">Бекетов Алексей</a>
              <a href="#" class="nav_link sublink">Столбов Михаил</a>
              <a href="#" class="nav_link sublink">Гуляева Юлия</a>
              <a href="#" class="nav_link sublink">Соболе Григорий</a>
              <a href="#" class="nav_link sublink">Лавров Илья</a>
            </ul>
          </li>
          <!-- end -->

          <!-- duplicate this li tag if you want to add or remove  navlink with submenu -->
        </ul>

        <ul class="menu_items">
          <div class="menu_title menu_editor"></div>
          <!-- duplicate these li tag if you want to add or remove navlink only -->
          <!-- Start -->
          <li class="item">
            <a href="#/leaders" class="nav_link">
              <span class="navlink_icon">
                <i class="bx bx-filter"></i>
              </span>
              <span class="navlink">Лидеры</span>
            </a>
          </li>
        </ul>
        <ul class="menu_items">
          <div class="menu_title menu_view"></div>
          <!-- duplicate these li tag if you want to add or remove navlink only -->
          <!-- Start -->

          <li class="item">
            <a href="#" class="nav_link">
              <span class="navlink_icon">
                <i class="bx bx-calendar"></i>
              </span>
              <span class="navlink">Календарь</span>
            </a>
          </li>
          <li class="item">
            <a href="#" class="nav_link">
              <span class="navlink_icon">
                <i class="bx bx-chalkboard"></i>
              </span>
              <span class="navlink">Канбан</span>
            </a>
          </li>
        </ul>
        <ul class="menu_items">
          <div class="menu_title menu_setting"></div>
          <li class="item">
            <a href="#" class="nav_link">
              <span class="navlink_icon">
                <i class="bx bx-book-add"></i>
              </span>
              <span class="navlink">Добавить доску</span>
            </a>
          </li>
          <li class="item">
            <a href="#" class="nav_link">
              <span class="navlink_icon">
                <i class="bx bx-add-to-queue"></i>
              </span>
              <span class="navlink">Добавить в команду</span>
            </a>
          </li>
          <li class="item">
            <a href="/#/createtask" class="nav_link">
              <span class="navlink_icon">
                <i class="bx bx-alarm-add"></i>
              </span>
              <span class="navlink">Новая задача</span>
            </a>
          </li>
        </ul>

        <!-- Sidebar Open / Close -->
        <div class="bottom_content">
          <div class="bottom expand_sidebar">
            <span> Открыть</span>
            <i class="bx bx-log-in"></i>
          </div>
          <div class="bottom collapse_sidebar">
            <span> Закрыть</span>
            <i class="bx bx-log-out"></i>
          </div>
        </div>
      </div>
    </nav>
    <!-- JavaScript -->
    <main class="intro">
      <Task v-for="(task, key) in tasks" :key="key"
        :status="task.status"
        :taskDiscription="task.taskDiscription"
        :taskPoints="task.taskPoints"
        :taskMark="task.taskMark"
        :taskRank="task.taskRank"
        :taskDealerCount="task.taskDealerCount"
        :taskDate="task.taskDate"
        :name="task.name"
      />
    </main>
  </body>
</template>

<script>
import Task from './elements/TaskElement.vue'
// import { getTasks } from '../../api/task'

export default {
  data () {
    return {
      isSidebarClosed: false,
      isSidebarHoverable: false,
      tasks: [{
        name: 'Задача №1',
        status: 'Принято',
        taskDiscription: 'Описание задания №1',
        taskPoints: 250,
        taskMark: 'Среднее',
        taskRank: 'Middle',
        taskDealerCount: 2,
        taskDate: '12.10.23'
      },
      {
        name: 'Реально сложная задача',
        status: 'Принято',
        taskDiscription: 'Описание сложной задачи',
        taskPoints: 600,
        taskMark: 'Сложное',
        taskRank: 'Senior',
        taskDealerCount: 1,
        taskDate: '16.10.23'
      },
      {
        name: 'Задача №3',
        status: 'Выдано',
        taskDiscription: 'Описание задания №3',
        taskPoints: 350,
        taskMark: 'Сложное',
        taskRank: 'Middle',
        taskDealerCount: 3,
        taskDate: '17.10.23'
      },
      {
        name: 'Задача №4',
        status: 'Выдано',
        taskDiscription: 'Описание задания №4',
        taskPoints: 200,
        taskMark: 'Средне',
        taskRank: 'Middle',
        taskDealerCount: 2,
        taskDate: '16.10.23'
      },
      {
        name: 'Задачка для джуна',
        status: 'Принято',
        taskDiscription: 'Описание задания №5',
        taskPoints: 100,
        taskMark: 'Простое',
        taskRank: 'Junior',
        taskDealerCount: 1,
        taskDate: '23.10.23'
      }]
    }
  },
  // beforeMount () {
  //   try {
  //     this.tasks = getTasks({ id: 1 })
  //   } catch (e) {
  //     console.log(e)
  //   }
  // },
  mounted () {
    // JavaScript код
    const body = document.querySelector('body')
    const darkLight = document.querySelector('#darkLight')
    const sidebar = document.querySelector('.sidebar')
    const submenuItems = document.querySelectorAll('.submenu_item')
    const sidebarOpen = document.querySelector('#sidebarOpen')
    const sidebarClose = document.querySelector('.collapse_sidebar')
    const sidebarExpand = document.querySelector('.expand_sidebar')

    sidebarOpen.addEventListener('click', () => {
      this.isSidebarClosed = !this.isSidebarClosed
    })

    sidebarClose.addEventListener('click', () => {
      this.isSidebarClosed = true
      this.isSidebarHoverable = true
    })

    sidebarExpand.addEventListener('click', () => {
      this.isSidebarClosed = false
      this.isSidebarHoverable = false
    })

    sidebar.addEventListener('mouseenter', () => {
      if (this.isSidebarHoverable) {
        this.isSidebarClosed = false
      }
    })

    sidebar.addEventListener('mouseleave', () => {
      if (this.isSidebarHoverable) {
        this.isSidebarClosed = true
      }
    })

    darkLight.addEventListener('click', () => {
      body.classList.toggle('dark')
      if (body.classList.contains('dark')) {
        darkLight.classList.replace('bx-sun', 'bx-moon')
      } else {
        darkLight.classList.replace('bx-moon', 'bx-sun')
      }
    })

    submenuItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        item.classList.toggle('show_submenu')
        submenuItems.forEach((item2, index2) => {
          if (index !== index2) {
            item2.classList.remove('show_submenu')
          }
        })
      })
    })

    if (window.innerWidth < 768) {
      this.isSidebarClosed = true
    }
  },
  components: {
    Task
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sarina&display=swap");
@import url("https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css");

/* Import Google font - Poppins */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Poiret+One&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
:root {
  --white-color: #fff;
  --blue-color: #4070f4;
  --grey-color: #707070;
  --grey-color-light: #aaa;
}
body {
  background-color: #e7f2fd;
  transition: all 0.5s ease;
}
body.dark {
  background-color: #333;
}
body.dark {
  --white-color: #333;
  --blue-color: #fff;
  --grey-color: #f2f2f2;
  --grey-color-light: #aaa;
}

/* navbar */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  background: linear-gradient(
    to right,
    rgb(153, 102, 255) 0%,
    rgb(100, 142, 254) 100%
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  z-index: 1000;
  box-shadow: 0 0 2px var(--grey-color-light);
}
.logo_item {
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 22px;
  font-weight: 500;
  color: var(--white-color);
}
.navbar img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.search_bar {
  height: 47px;
  max-width: 430px;
  width: 100%;
}
.search_bar input {
  height: 100%;
  width: 100%;
  border-radius: 25px;
  font-size: 18px;
  outline: none;
  background-color: var(--white-color);
  color: var(--grey-color);
  border: 1px solid var(--grey-color-light);
  padding: 0 20px;
}
.navbar_content {
  display: flex;
  align-items: center;
  column-gap: 25px;
}
.navbar_content i {
  cursor: pointer;
  font-size: 20px;
  color: var(--grey-color);
}

/* sidebar */
.sidebar {
  background-color: var(--white-color);
  width: 290px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 80px 20px;
  z-index: 100;
  overflow-y: scroll;
  box-shadow: 0 0 1px var(--grey-color-light);
  transition: all 0.5s ease;
}
.sidebar.close {
  padding: 60px 0;
  width: 80px;
}
.sidebar::-webkit-scrollbar {
  display: none;
}
.menu_content {
  position: relative;
}
.menu_title {
  margin: 15px 0;
  padding: 0 20px;
  font-size: 18px;
}
.sidebar.close .menu_title {
  padding: 6px 30px;
}
.menu_title::before {
  color: var(--grey-color);
  white-space: nowrap;
}
.menu_dahsboard::before {
  content: "Панель управления";
}
.menu_editor::before {
  content: "Вид";
}
.menu_setting::before {
  content: "Настройки";
}

.menu_view::before {
  content: "Представление";
}

.sidebar.close .menu_title::before {
  content: "";
  position: absolute;
  height: 2px;
  width: 18px;
  border-radius: 12px;
  background: var(--grey-color-light);
}
.menu_items {
  padding: 0;
  list-style: none;
}
.navlink_icon {
  position: relative;
  font-size: 22px;
  min-width: 50px;
  line-height: 40px;
  display: inline-block;
  text-align: center;
  border-radius: 6px;
}
.navlink_icon::before {
  content: "";
  position: absolute;
  height: 100%;
  width: calc(100% + 100px);
  left: -20px;
}
.navlink_icon:hover {
  background: var(--blue-color);
}
.sidebar .nav_link {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 15px;
  border-radius: 8px;
  text-decoration: none;
  color: var(--grey-color);
  white-space: nowrap;
}
.sidebar.close .navlink {
  display: none;
}
.nav_link:hover {
  color: var(--white-color);
  background: var(--blue-color);
}
.sidebar.close .nav_link:hover {
  background: var(--white-color);
}
.submenu_item {
  cursor: pointer;
}
.submenu {
  display: none;
}
.submenu_item .arrow-left {
  position: absolute;
  right: 10px;
  display: inline-block;
  margin-right: auto;
}
.sidebar.close .submenu {
  display: none;
}
.show_submenu ~ .submenu {
  display: block;
}
.show_submenu .arrow-left {
  transform: rotate(90deg);
}
.submenu .sublink {
  padding: 15px 15px 15px 52px;
}
.bottom_content {
  position: fixed;
  bottom: 60px;
  left: 0;
  width: 260px;
  cursor: pointer;
  transition: all 0.5s ease;
}
.bottom {
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  justify-content: space-around;
  padding: 18px 0;
  text-align: center;
  width: 100%;
  color: var(--grey-color);
  border-top: 1px solid var(--grey-color-light);
  background-color: var(--white-color);
}
.bottom i {
  font-size: 20px;
}
.bottom span {
  font-size: 18px;
}
.sidebar.close .bottom_content {
  width: 50px;
  left: 15px;
}
.sidebar.close .bottom span {
  display: none;
}
.sidebar.hoverable .collapse_sidebar {
  display: none;
}
#sidebarOpen {
  display: none;
}

.intro {
  margin-left: 290px;
  margin-top: 44px;
  width: 1630px;
  height: 907px;
  background-size: cover;
  padding-top: 20px;
  display: flex;
}
</style>
