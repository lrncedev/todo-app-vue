<template>
  <div>
    <FormComponent :formLabel="formLabel"/>
  </div>
</template>
<script>
import FormComponent from '../components/FormComponent.vue'
export default {
  components: {
    FormComponent
  },
  data() {
    return {
      formLabel: {
        title: "Task Title",
        description: "Task Description",
        deadLine: "Task Deadline"
      }
    }
  }
}
</script>
<style lang="scss">
.storageButtons {
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: end;

  .action-btn {
    padding: .4em;
    background-color: transparent;
    border: none;
    font-weight: 900;
    color: white;
    border-radius: 5px;
  }

  .save {
    background-color: goldenrod;
  }

  .load {
    background-color: green;
  }
}
</style>