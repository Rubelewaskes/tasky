<template>
  <body class="bod">
    <div class="window">
      <div class="container">
        <textarea
          class="text-area-b"
          placeholder="Название задачи"
          v-model="taskInfo.name"
        ></textarea>

        <div class="aut">
          <b>Автор: </b>
          {{ this.value }}
        </div>

        <textarea
          class="text-area-a"
          placeholder="Добавьте описание задачи"
          v-model="taskInfo.description"
        ></textarea>

        <div class="pr"></div>

        <div class="yellow">
          <div class="checklist"></div>
          <button class="primary-button" id="addStep">+ Добавить шаг</button>
        </div>
      </div>

      <div class="vr"></div>

      <div class="right">
        <div class="vertical-line"></div>
        <div class="menu">
          <div class="text">Исполнители</div>
          <div class="pic">
            <img
              src="../../css/employee.svg"
              width="21"
              height="21"
              alt="SVG Image"
            />
          </div>
        </div>
        <div class="but">
          <div id="textFields"></div>
          <button class="button-secondary" id="addButton">+ Добавить</button>
        </div>
        <div class="text-fields-container" id="textFields">
        </div>

        <div class="second">
          <div class="text">
            Дедлайн:
            <div class="cal">
              <input
                type="date"
                style="cursor: pointer;     border: none;
                        font-family: 'Montserrat'; font-weight: 500; border-bottom: 1px solid #373737;
                        font-size: 15px;
                        "
                name="Date"
                id="davaToday"
              />
            </div>
          </div>
          <div class="pic">
            <img
              src="../../css/time.svg"
              width="21"
              height="21"
              alt="SVG Image"
            />
          </div>

          <div class="hard">
            <div class="text">
              Сложность
            </div>
            <div class="pic">
              <img
                src="../../css/target.svg"
                width="21"
                height="21"
                alt="SVG Image"
              />
            </div>
          </div>
          <select id="categorySelect">
            <option value="категория1">Junior</option>
            <option value="категория2">Junior-Middle</option>
            <option value="категория3">Middle</option>
            <option value="категория4">Middle-Senior</option>
            <option value="категория5">Senior</option>
          </select>
        </div>

        <div class="final">
          <div class="text">Файлы (<span id="fileCount">0</span>)</div>
          <div class="pic">
            <img
              src="../../css/file.svg"
              width="21"
              height="21"
              alt="SVG Image"
            />
          </div>

          <div id="fileList">
            <!-- Здесь будет отображаться список выбранных файлов -->
          </div>
          <input type="file" id="fileToUpload" multiple />
          <label for="fileToUpload" class="file-upload-button"
            >+ Добавить</label
          >
          <!-- <script src="file_send.js"></script> -->
          <div class="send">
            <!-- <script src="scr.js"></script> -->
          </div>
        </div>

        <div class="metki">
          <div class="text">
            Метки
          </div>
          <div class="pic">
            <img
              src="../../css/edit.svg"
              width="21"
              height="21"
              alt="SVG Image"
            />
          </div>
          <!-- <script src="script_metki.js"></script> -->
          <div class="met_list">
            <div class="text-fields-metki" id="text-metki">
              <!-- Ваши текстовые поля будут добавлены сюда -->
            </div>
            <button class="file-upload-button" id="addLabelButton">
              + Добавить
            </button>
          </div>
        </div>
        <hr />
        <div class="end">
          <div class="ray">
            Баллы рейтинга
          </div>
          <div class="range-slider">
            <input
              class="range-slider__range"
              type="range"
              value="300"
              min="0"
              max="1000"
              step="20"
            />
            <input
              style="   margin-left: 0px;
                    margin-top: 15px;
                    padding: 10px;
                    font-family: 'Montserrat';
                    font-weight: 600;
                    border-radius: 10px;
                    border: none;
                    color: white;
                    width: 100px;
                    height: 40px;
                    font-size: 150%;
                    background-color: #fe9901;"
              type="text"
              id="rangeValue"
              value="300"
            />
          </div>
        </div>
        <div class="but_send">
          <button class="button-third" id="addButton">Отправить</button>
        </div>
      </div>
    </div>
  </body>
  <div class="arrow-container">
        <a class="arrow" href="/#/userTasks">←</a>
    </div>
</template>

<script>
/* eslint-disable */
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
  },
  mounted () {
    // script1
    const checklist = document.querySelector('.checklist')
    const initialSteps = 3 // Количество начальных шагов

    for (let i = 1; i <= initialSteps; i++) {
      const step = createStep(i, i === 2) // Передаем true только для второго шага
      checklist.appendChild(step)
    }

    document.getElementById('addStep').addEventListener('click', function () {
      const step = createStep(
        checklist.querySelectorAll('.step').length + 1,
        false
      ) // Новые шаги не имеют изначальных подзадач
      checklist.appendChild(step)
    })

    function createStep (stepNumber, hasSubtasks) {
      const step = document.createElement('div')
      step.classList.add('step')

      const stepCheckbox = document.createElement('input')
      stepCheckbox.type = 'checkbox'
      stepCheckbox.setAttribute('name', 'step_' + stepNumber)
      stepCheckbox.addEventListener('change', updateSubtasks)

      const stepLabel = document.createElement('label')
      stepLabel.textContent = 'Шаг №' + stepNumber
      stepLabel.setAttribute('contenteditable', 'true')

      const removeStep = document.createElement('span')
      removeStep.classList.add('remove-button')
      removeStep.innerHTML = '<span class="remove-icon">x</span>'
      removeStep.addEventListener('click', function () {
        checklist.removeChild(step)
      })

      const subtasks = document.createElement('ul')

      if (hasSubtasks) {
        for (let j = 1; j <= 2; j++) {
          // Добавляем две изначальные подзадачи
          const subtask = createSubtask(stepNumber, j)
          subtasks.appendChild(subtask)
        }
      }

      const addSubtaskButton = document.createElement('button')
      addSubtaskButton.classList.add('add-subtask-button')
      addSubtaskButton.textContent = '+ Добавить подзадачу'
      addSubtaskButton.style.display = 'none'

      step.addEventListener('mouseover', function () {
        addSubtaskButton.style.display = 'inline'
      })

      step.addEventListener('mouseout', function () {
        addSubtaskButton.style.display = 'none'
      })

      addSubtaskButton.addEventListener('click', function () {
        const subtask = createSubtask(
          stepNumber,
          subtasks.querySelectorAll('li').length + 1
        )
        subtasks.appendChild(subtask)
        addSubtaskButton.style.display = 'none'
      })

      step.appendChild(stepCheckbox)
      step.appendChild(stepLabel)
      step.appendChild(removeStep)
      step.appendChild(subtasks)
      step.appendChild(addSubtaskButton)

      return step
    }

    function createSubtask (stepNumber, subtaskNumber) {
      const subtask = document.createElement('li')

      const subtaskCheckbox = document.createElement('input')
      subtaskCheckbox.type = 'checkbox'
      subtaskCheckbox.setAttribute(
        'name',
        'subtask_' + stepNumber + '_' + subtaskNumber
      )
      subtaskCheckbox.addEventListener('change', function (event) {
        const subtaskLabel = event.target.parentElement.querySelector('label')
        if (event.target.checked) {
          subtaskLabel.style.textDecoration = 'line-through'
        } else {
          subtaskLabel.style.textDecoration = 'none'
        }
        updateStep(event)
      })

      const subtaskLabel = document.createElement('label')
      subtaskLabel.textContent = 'Подзадача №' + subtaskNumber
      subtaskLabel.setAttribute('contenteditable', 'true')

      const removeSubtask = document.createElement('span')
      removeSubtask.classList.add('remove-button')
      removeSubtask.innerHTML = '<span class="remove-icon">x</span>'
      removeSubtask.addEventListener('click', function () {
        subtask.parentElement.removeChild(subtask)
        updateStep(event)
      })

      subtask.appendChild(subtaskCheckbox)
      subtask.appendChild(subtaskLabel)
      subtask.appendChild(removeSubtask)

      return subtask
    }

    function updateSubtasks (event) {
      const stepCheckbox = event.target
      const stepNumber = stepCheckbox.getAttribute('name').split('_')[1]
      const subtaskCheckboxes = stepCheckbox.parentElement.querySelectorAll(
        `[name^="subtask_${stepNumber}_"]`
      )
      subtaskCheckboxes.forEach(function (subtaskCheckbox) {
        subtaskCheckbox.checked = stepCheckbox.checked
        const subtaskLabel = subtaskCheckbox.parentElement.querySelector(
          'label'
        )
        if (subtaskCheckbox.checked) {
          subtaskLabel.style.textDecoration = 'line-through'
        } else {
          subtaskLabel.style.textDecoration = 'none'
        }
      })
    }

    function updateStep (event) {
      const subtaskCheckbox = event.target
      const [stepNumber, subtaskNumber] = subtaskCheckbox
        .getAttribute('name')
        .split('_')
        .slice(1)
      const parentElement = subtaskCheckbox.parentElement
      const stepCheckbox = parentElement
        ? parentElement.parentElement
          ? parentElement.parentElement.querySelector(
              `[name="step_${stepNumber}"]`
          )
          : null
        : null
      if (stepCheckbox) {
        const subtaskCheckboxes = stepCheckbox.parentElement.querySelectorAll(
          `[name^="subtask_${stepNumber}"]`
        )
        const allSubtasksChecked = Array.from(subtaskCheckboxes).every(
          subtask => subtask.checked
        )
        stepCheckbox.checked = allSubtasksChecked
      }

      const allSubtasksRemoved = !stepCheckbox.parentElement
        .querySelector('ul')
        .hasChildNodes()
      if (allSubtasksRemoved) {
        checklist.removeChild(step)
      }

      const subtaskLabel = subtaskCheckbox.parentElement.querySelector('label')
      if (subtaskCheckbox.checked) {
        subtaskLabel.style.textDecoration = 'line-through'
      } else {
        subtaskLabel.style.textDecoration = 'none'
      }
    }

    // script2
    const addButton = document.getElementById('addButton')
    const textFieldsContainer = document.getElementById('textFields')
    let textFieldCounter = 0

    // Функция для создания текстового поля
    function createTextField () {
      textFieldCounter++

      // Создаем контейнер для текстового поля и кнопки удаления
      const textFieldContainer = document.createElement('div')
      textFieldContainer.classList.add('text-field-container')

      const textField = document.createElement('input')
      textField.type = 'text'
      textField.placeholder = 'Исполнитель №' + textFieldCounter

      // Создаем кнопку удаления
      const removeButton = document.createElement('remove-emp')
      removeButton.classList.add('remove-emp')
      removeButton.innerHTML = 'x'
      removeButton.addEventListener('click', function () {
        textFieldsContainer.removeChild(textFieldContainer)
      })

      textFieldContainer.appendChild(textField)
      textFieldContainer.appendChild(removeButton)

      // Добавляем контейнер в textFieldsContainer
      textFieldsContainer.appendChild(textFieldContainer)
    }

    // Создаем изначально 2 текстовых поля
    for (let i = 0; i < 2; i++) {
      createTextField()
    }

    // Добавляем обработчик для кнопки "Добавить"
    addButton.addEventListener('click', function () {
      createTextField()
    })

    // script3
    const fileInput = document.getElementById('fileToUpload')
    const fileCountElement = document.getElementById('fileCount')

    fileInput.addEventListener('change', function () {
      const files = fileInput.files

      // Обновляем количество файлов
      updateFileCount(files.length)
    })

    function updateFileCount (count) {
      fileCountElement.textContent = count
    }

    // script4
    const addLabelButton = document.getElementById('addLabelButton')
    const textMetkiContainer = document.getElementById('text-metki')
    let textMetkiCounter = 0
    const labelColors = [
      '#ffc957',
      '#ff5d55',
      '#648efe',
      '#8fe03d',
      '#e0b004',
      '#feb42f'
    ]

    // Функция для создания текстового поля
    function createTextMetki () {
      textMetkiCounter++

      const textMetkiContainer = document.createElement('div')
      textMetkiContainer.classList.add('text-field-metki')

      const textMetki = document.createElement('input')
      textMetki.type = 'text'
      textMetki.classList.add('label-input') // Добавьте класс .label-input

      // Выбор случайного цвета
      const randomColor =
        labelColors[Math.floor(Math.random() * labelColors.length)]
      textMetki.style.backgroundColor = randomColor

      const removeButton = document.createElement('remove-emp')
      removeButton.classList.add('remove-emp')
      removeButton.innerHTML = 'x'
      removeButton.style.color = randomColor // Устанавливаем цвет крестика
      removeButton.style.borderColor = randomColor // Устанавливаем цвет крестика

      removeButton.addEventListener('click', function () {
        textMetkiContainer.removeChild(textMetkiContainer)
      })

      // Добавляем обработчик события на ввод текста
      textMetki.addEventListener('input', function () {
        // Изменяем ширину поля на основе содержимого и добавляем 7 пикселей
        textMetki.style.width = textMetki.value.length * 7 + 20 + 'px'
        textMetki.style.width = width > 250 ? '250px' : width + 'px'
      })

      textMetkiContainer.appendChild(textMetki)
      textMetkiContainer.appendChild(removeButton)

      textMetkiContainer.appendChild(textMetkiContainer)
    }

    // Добавляем обработчик для кнопки "Добавить"
    addLabelButton.addEventListener('click', function () {
      createTextMetki()
    })

    // скрипт 5
    const rangeSlider = function () {
      const slider = $('.range-slider')
      const range = $('.range-slider__range')
      const value = $('#rangeValue')

      slider.each(function () {
        function updateSlider () {
          range.val(value.val())
        }

        function updateValue () {
          value.val(range.val())
        }

        value.on('input', function () {
          updateSlider()
        })

        range.on('input', function () {
          updateValue()
        })

        // Инициализация слайдера
        updateSlider()
        updateValue()
      })
    }

    rangeSlider()
  }
}
</script>

<style>
:root {
  --range-label-width: 15px;
  --range-handle-size: 20px;
  --range-track-height: 10px;
  --range-handle-color: #2c3e50;
  --range-track-color: #d7dcdf;
  --range-label-color: #2c3e50;
}

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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body .bod {
  background-image: linear-gradient(to left, #648efe, #9966ff);
  box-sizing: border-box;
  font-family: "Montserrat";
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.window {
  height: 628px;
  width: 1048px;
  background-color: #fff;
  text-align: center;
  border-radius: 25px;
}

.container {
  text-align: left;
  margin-left: 38px;
  margin-top: 33px;
}

.container .name {
  font-weight: 700;
  font-size: 48px;
  color: #0e2f91;
}

.container .aut {
  cursor: default;
  margin-left: 15px;
  font-weight: 500;
  font-size: 21px;
  color: #373737;
}

.container .text-area-a {
  margin-top: 22px;
  font-family: "Montserrat";
  width: 550px;
  resize: none;
  padding: 15px;
  border-radius: 15px;
  border: 0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  height: 167px;
  background-color: #cce5ff;
  font-size: 22px;
  font-weight: 500;
}

.container .text-area-b {
  margin-left: -15px;
  margin-top: -15px;
  font-family: "Montserrat";
  width: 550px;
  resize: none;
  padding: 15px;
  border-radius: 15px;
  border: 0;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.06);
  height: 90px;
  font-weight: 700;
  font-size: 48px;
  color: #0e2f91;
  overflow: hidden;
}

.container .pr {
  cursor: default;
  margin-top: 17px;
  margin-left: 15px;
  font-weight: 700;
  font-size: 29px;
  color: #373737;
}
.yellow {
  margin-top: 13px;
  width: 415px;
  height: 200px; /* Установите фиксированную высоту, которая вам нужна */
  background-color: #fad468;
  border-radius: 15px;
  overflow-y: scroll; /* Добавление всегда видимой полосы прокрутки по вертикали */
  overflow-y: auto; /* Добавление полосы прокрутки по вертикали, если содержимое превышает заданную высоту */
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.06);
}

.checklist {
  font-family: "Montserrat";
  padding-left: 15px;
  padding-top: 5px;
}

.step {
  margin-top: 10px;
}

label {
  cursor: text;
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

button {
  font-family: "Montserrat";
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

/* Скрыть стандартные полосы прокрутки */
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

.text-area-a::-webkit-scrollbar-thumb {
  background-color: #799cfa; /* Цвет ползунка полосы прокрутки */
  width: 20px;
  border-radius: 20px; /* Скругленные углы для ползунка */
}
.text-area-a::-webkit-scrollbar {
  width: 20px;
  background-color: #cce5ff; /* Фоновый цвет полосы прокрутки */
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

.right {
  text-align: left;
  margin-top: -550px;
  margin-left: 665px;
  height: 628px;
  overflow: auto; /* Добавьте полосу прокрутки, если содержимое превышает заданную высоту */
}

.right::-webkit-scrollbar {
  width: 29px;
  background-color: transparent;
}

/* Стилизация ползунка (бегунка) полосы прокрутки */
.right::-webkit-scrollbar-thumb {
  width: 20px;
  background-color: #2c3e50; /* Цвет ползунка полосы прокрутки */
  border-radius: 20px; /* Скругленные углы для ползунка */
}

.vertical-line {
  text-align: left;
  width: 0px; /* Ширина линии */
  height: 628px; /* Высота линии */
  background-color: #373737; /* Цвет линии */
  right: 0;
}

.vr {
  width: 2px; /* Ширина линии */
  height: 628px; /* Высота линии */
  margin-top: -547px;
  background-color: #373737; /* Цвет линии */
  position: absolute;
  margin-left: 664px;
}

.menu {
  margin-top: -596px;
  margin-left: 28px;
  font-weight: 700;
  font-size: 20px;
}

.menu .pic {
  margin-top: 1px;
}

.menu .text {
  vertical-align: middle;

  margin-left: 28px;
  margin-bottom: -24px;
}

.but {
  margin-top: 5px;
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
  font-family: "Montserrat";
}

.text-area-b::placeholder {
  color: #0e2f91;
}

.text-area-a::placeholder {
  color: #373737;
}

.button-secondary {
  background-color: #5382e4;
  margin-top: 0px;
  border-radius: 10px;
  margin-left: 28px;
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
  height: 1px; /* Высота линии */
  width: 300px;
  background-color: #373737; /* Цвет линии */
}

.second {
  margin-top: 20px;
  margin-left: 28px;
  font-weight: 700;
  font-size: 20px;
}

.pic {
  margin-top: 1px;
}

.text {
  vertical-align: middle;
  font-size: 20px;
  margin-left: 28px;
  margin-bottom: -24px;
  cursor: default;
}

.cal {
  margin-left: 115px;
  margin-top: -26px;
}

.hard {
  cursor: default;
  margin-top: 10px;
}

select {
  padding: 5px;
  font-family: "Montserrat";
  font-weight: 500;
  border-radius: 10px;
  border: none;
  color: white;
  background-color: #fe9901;
  cursor: pointer;
  width: 150px;
}

.button-third {
  background-color: #92d36e;
  margin-top: 18px;
  padding: 8px 30px;
  border-radius: 10px;
  font-size: 27px;
  font-weight: 600;
}

.span {
  font-weight: 300;
}

#fileToUpload {
  display: none;
}

.final {
  margin-top: -54px;
  margin-left: 200px;
  font-weight: 700;
  font-size: 20px;
}

.input {
  margin-top: 200px;
}

.file-upload-button {
  font-family: "Montserrat";
  font-weight: 600;
  background-color: #5382e4;
  border-radius: 10px;
  color: #fff;
  padding: 5px 7px;
  font-size: 14px;
  cursor: pointer;
  margin-left: 0;
}

.range-slider {
  margin-top: 15px;
  width: 100%;
}

.range-slider__range {
  -webkit-appearance: none;
  width: calc(100% - (var(--range-label-width) + 13px));
  height: var(--range-track-height);
  border-radius: 5px;
  background: var(--range-track-color);
  outline: none;
  padding: 0;
  margin: 0;
}

.range-slider__range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: var(--range-handle-size);
  height: var(--range-handle-size);
  border-radius: 50%;
  background: var(--range-handle-color);
  cursor: pointer;
}

.end {
  margin-left: 28px;
  margin-top: 30px;
}

.ray {
  text-align: center;
  margin-left: -28px;
  font-weight: 700;
  font-size: 24px;
  cursor: default;
}

.but_send {
  margin-left: -30px;
  text-align: center;
}

.metki {
  margin-left: 28px;
  cursor: default;
  margin-top: 10px;
}

.metki .text {
  font-weight: 700;
}

.text-field-metki {
  margin-left: -28px;
  width: auto;
  display: inline-block; /* Располагаем метки в ряд */
  margin-right: 10px; /* Расстояние между метками */
}
.met_list {
  margin-top: 5px;
}

input.label-input {
  /* Ваши специфические стили здесь */
  width: 50px; /* Пример изменения ширины на 50 пикселей */
}

/* .strike {
  text-decoration: line-through;
}

li {
  cursor: pointer;
} */
</style>
