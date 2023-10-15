<template>
  <div class="B">
    <table id="leaderboard">
      <div class="tbomba">
        <thead>
           <tr>
             <th>#</th>
             <th>ФИО</th>
             <th>Команда</th>
             <th>Роль</th>
             <th>Баллы</th>
           </tr>
        </thead>
        <tbody>
             <tr v-for="(record, index) in sortedData" :key="record.id">
             <td>{{ index + 1 }}</td>
             <td>{{ record.name }}</td>
             <td>{{ record.team }}</td>
             <td>{{ record.profession }}</td>
             <td>{{ record.rating }}</td>
             </tr>
        </tbody>
      </div>
     </table>
  </div>
  <div class="arrow-container">
    <a class="arrow" href="/#/userTasks">←</a>
  </div>
</template>

<script>
import { leaderTable } from '../../api/leader'

export default {
  name: 'LeaderBoard',
  data () {
    return {
      sortedData: []
    }
  },
  async beforeMount () {
    try {
      await this.fetchDataBeforeMount()
    } catch (e) {
      console.log(e)
      return 0
    }
  },
  methods: {
    async fetchDataBeforeMount () {
      try {
        const result = await leaderTable()
        if (result && result.data) {
          console.log(result)
          this.sortedData = result.data
          console.log('Результат:', this.sortedData)
        } else {
          console.log('Ошибка при получении данных: данные отсутствуют')
        }
      } catch (e) {
        console.log(e)
        return 0
      }
    }
  }
}

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Poiret+One&display=swap");

.arrow-container {
          position: fixed;
          left: 15px;
          top: 15px;
          z-index: 9999;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(to right, #648efe, #9966ff);
          border: 2px solid #fff;
          text-align: center;
          line-height: 50px;
      }

      .arrow {
          color: #fff;
          font-size: 24px;
          text-decoration: none;
          vertical-align: center;
      }
.B {
    font-family: 'Montserrat',serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
table {
    border-collapse: collapse;
    margin: auto;
    text-align: center;
    vertical-align: center;
}

th {
    color: white;
    min-height: 100px;
    font-size: 26px;
    min-width: 100px;
}

td {
    color: #373737;
    font-size: 17px;
    height: 43px;
}

td:nth-child(1), td:nth-child(3), td:nth-child(5) {
    font-weight: bold;
}

th, td {
    padding: 20px;
    text-align: left;
}

thead tr:first-child {
    background-image: linear-gradient(to left, #648efe, #9966ff);
}

thead {
    background-color: #f2f2f2;
}

tr:nth-child(even) {
    background-color: white;
}

.tbomba{
    background-color: #f2f2f2;
}

</style>
