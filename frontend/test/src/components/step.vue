<template>
  <div class="step">
    <input type="checkbox" v-model="stepChecked" @change="updateSubtasks" />
    <label contenteditable="true" v-text="step.label" @input="updateLabel" />
    <span class="remove-button" @click="removeStep">x</span>
    <ul>
      <subtask v-for="(subtask, index) in step.subtasks" :key="index" :subtask="subtask" @removeSubtask="removeSubtask(index)" />
    </ul>
    <button class="add-subtask-button" @click="addSubtask">+ Добавить подзадачу</button>
  </div>
</template>

<script>
export default {
  props: ['step'],
  methods: {
    updateSubtasks() {
      const isChecked = this.stepChecked;
      this.step.subtasks.forEach((subtask) => (subtask.checked = isChecked));
    },
    updateLabel() {
      // Обновление текста шага
    },
    removeStep() {
      this.$emit('removeStep');
    },
    addSubtask() {
      this.step.subtasks.push({
        label: 'Новая подзадача',
        checked: false,
      });
    },
    removeSubtask(index) {
      this.step.subtasks.splice(index, 1);
    },
  },
};
</script>