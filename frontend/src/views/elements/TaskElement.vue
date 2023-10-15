<template>
    <div class="tasksBox">
        <div class="taskBoxName">{{ name }}</div>
            <p style="margin-left: 10px">{{ status }}</p>
            <div class="task">
                <div class="taskDiscription">{{ taskDiscription }}</div>
                <div class="taskPoints">{{ taskPoints }}</div>
                <div class="taskMarks">
                <div class="taskMark">{{ taskMark }}</div>
            </div>
                <div class="taskDownInfo">
                <div class="taskDealer">{{ taskDealerCount }}</div>
                <div class="taskRank">{{ taskRank }}</div>
                <div class="taskDate">{{ taskDate }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    name: String,
    status: String,
    taskDiscription: String,
    taskPoints: Number,
    taskMark: String,
    taskRank: String,
    taskDealerCount: Number,
    taskDate: String
  }
}
</script>

<style>

.intro .tasksBox {
  margin-left: 30px;
  margin-top: 20px;
  width: 450px;
  height: 850px;
  background: #ebebeb;
  border-radius: 20px;
}

.intro .tasksBox .taskBoxName {
  width: 450px;
  height: 50px;
  padding: 8px 8px 8px 8px;
  background: #c0c0c0;
  color: #000000;
  border-radius: 20px 20px 0px 0px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
  text-align: center;
}

.intro .tasksBox .task {
  width: 430px;
  height: 180px;
  background: #ffffff;
  padding-top: 15px;
  padding-left: 15px;
  border-radius: 10px 10px 10px 10px;
  margin-left: 10px;
  margin-top: 10px;
}

.intro .tasksBox .task .taskDiscription {
  width: 360px;
  height: 75px;
  background: #ffffff;
  color: #000000;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  text-align: left;
  padding: 5px;
}

.intro .tasksBox .task .taskPoints {
  width: 35px;
  height: 25px;
  color: #ff5d55;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  margin-top: -70px;
  margin-right: 15px;
  float: right;
}

.intro .tasksBox .task .taskMarks {
  height: 20px;
  widows: 250px;
  display: inline;
}

.intro .tasksBox .task .taskMarks .taskMark {
  width: 100px;
  height: 20px;
  padding: 3px 1px 3px 1px;
  background: #ff5d55;
  color: #ffffff;
  border-radius: 5px 5px 5px 5px;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 10px;
  line-height: 1.3;
  text-align: center;
  margin-right: 10px;
}

.intro .tasksBox .task .taskDownInfo {
  width: 400px;
  height: 30px;
  display: inline-flex;
  margin-top: 30px;
}

.intro .tasksBox .task .taskDownInfo .taskRank {
  width: 150px;
  height: 25px;
  padding: 3px 1px 3px 1px;
  background: #c238eb;
  color: #ffffff;
  border-radius: 5px 5px 5px 5px;
  font-family: "Montserrat";
  font-weight: bold;
  font-size: 14px;
  line-height: 1.3;
  text-align: center;
  margin-left: 100px;
}

.intro .tasksBox .task .taskDownInfo .taskDealer {
  width: 30px;
  height: 30px;
  background: #c0c0c0;
  color: #000000;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  text-align: center;
  border-radius: 50%;
  padding-top: 5px;
}

.intro .tasksBox .task .taskDownInfo .taskDate {
  width: 59px;
  height: 25px;
  color: #929292;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  text-align: right;
  margin-left: 60px;
}

@media screen and (max-width: 768px) {
  #sidebarOpen {
    font-size: 25px;
    display: block;
    margin-right: 10px;
    cursor: pointer;
    color: var(--grey-color);
  }
  .sidebar.close {
    left: -100%;
  }
  .search_bar {
    display: none;
  }
  .sidebar.close .bottom_content {
    left: -100%;
  }
}
</style>
