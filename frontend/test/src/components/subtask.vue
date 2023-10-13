<template>
    <li>
      <input type="checkbox" v-model="subtask.checked" />
      <label contenteditable="true" v-text="subtask.label" />
      <span class="remove-button" @click="removeSubtask">x</span>
    </li>
</template>
  
<script>
  export default {
    props: ['subtask'],
    methods: {
      removeSubtask() {
        this.$emit('removeSubtask');
      },
    },
  };
</script>