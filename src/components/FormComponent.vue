<template >
  <div>
    <div class="localButtons">
      <button class="save" @click="saveLocal">Save</button>
      <button class="load" @click="loadLocal" :disabled="todoTask < 1">Load</button>
    </div>
    <h1>Todo Application</h1>
    <form>
      <p id="todo-title">Add new task</p>
      <input type="text" name="taskName" id="task-input" required>
      <label for="task-category">Category:</label>
      <select name="taskCat" id="task-category" required>
        <option value="">Test</option>
        <option value="">Test2</option>
        <option value="">Test3</option>
      </select>
      <button type=submit id="task-btn">Add Task</button>
    </form>
    <!-- <h1 id="app-title">Todo Application</h1> -->
    
    <!-- <div class="todo-list">
      <form class="todo-input" autocomplete="off" @submit.prevent="addTask">
        <p id="todo-title">Add new task</p>
        <input type="text" name="taskName" id="task-input" v-model="formValues.taskValue" required>
        <label for="task-category">Category:</label>
        <select name="taskCat" id="task-category" v-model="formValues.categoryValue" required>
          <option  class=""
            v-for="(category, index) in categories" 
            :key="index" 
            :value="category" 
          >
            {{ category }}
          </option>
        </select>
        <button type=submit id="task-btn">Add Task</button>
      </form>
    </div> -->
    <!-- <h1>TEst</h1> -->
  </div>
</template>
<script>
export default {
  name: 'FormComponent',

}
</script>
<style lang="">
  
</style>