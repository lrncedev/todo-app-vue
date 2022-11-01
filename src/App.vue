<template>
  <div class="container">
    <div class="todo-list">
      <div class="todo-input">
        <input type="text" name="task" id="task-input" v-model="taskInput">
        <button id="task-btn" @click="addTask">Add</button>
      </div>
      <div class="todo-task">
        <div class="task-list" v-for="todo in todoTask" :key="todo">
          <p class="task-input">{{ todo }}</p>
          <div class="task-control">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default { 
  name: 'App',
  components: {
  },
  data() {
    return {
      todoTask: ['Task 1', 'Task2', 'Task3'],
      taskInput: ''
    }
  },
  methods: {
    addTask() {
      this.todoTask.push(this.taskInput);
      this.taskInput = '';
    }
  }
}

</script>

<style lang="scss">
body {
  background-color: rgb(49, 49, 49);
}

.container {
  padding: 1em 3em;
  
  .todo-list {
    width: 60%;
    margin-inline: auto;

    .todo-input {
      width: 60%;
      margin-inline: auto;
      display: flex;
      align-items: center;
      margin-bottom: 1em;
      #task-input {
        width: 100%;
        padding: .5em;
      }

      #task-btn {
        padding: .5em;
        text-transform: uppercase;
        font-weight: bold;
      }
    }

    .todo-task {
      width: 70%;
      margin-inline: auto;
      color: white;
      display: flex;
      flex-direction: column;
      gap: .3em;

      .task-list {
        padding: .2em .4em;
        display: flex;
        align-items: center;
        border: 2px solid gray;

        .task-input {
          flex-grow: 1;
        }

        .task-control {
          display: flex;
          gap: .4em;
          
        }
      }
    }
  }
}
</style>
