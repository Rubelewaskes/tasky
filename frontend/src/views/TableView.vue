<template>
   <div>
    <table>
      <thead>
        <tr>
          <th>Номер</th>
          <th>ФИО</th>
          <th>Команда</th>
          <th>Профессия</th>
          <th>Баллы</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) in sortedData" :key="record.id">
          <td>{{ index + 1 }}</td>
          <td>{{ record.name }}</td>
          <td>{{ record.team }}</td>
          <td>{{ record.profession }}</td>
          <td>{{ record.points }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { leaderTable } from '../../api/leaders'

export default {
  name: 'LeaderBoard',
  data () {
    return {
      sortedData: {}
    }
  },
  async beforeMount () {
    try {
      const result = await fetchDataBeforeMount()
      console.log(result)
      this.sortedData = result.data
      console.log('Результат:', this.sortedData)
    } catch (e) {
      console.log(e)
      return 0
    }
  }
}

async function fetchDataBeforeMount () {
  try {
    return await leaderTable()
  } catch (e) {
    return (e)
  }
}
</script>

<style scoped>
  body {
      font-family: Arial, sans-serif;
  }
  table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px;
  }
  th, td {
      border: 1px solid #000;
      padding: 8px;
      text-align: center;
  }
  thead {
      background-color: #f2f2f2;
  }
  tr:nth-child(even) {
      background-color: #f2f2f2;
  }
</style>
