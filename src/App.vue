<template>
  <div class="container">
    <h1 id="app-title">Todo Application</h1>
    <div class="todo-list">
      <div class="todo-input">
        <p id="todo-title">Add new task</p>
        <input type="text" name="task" id="task-input" v-model="taskInput" >
        <button id="task-btn" @click="addTask">Add Task</button>
      </div>
      <div class="todo-task">
        <h2>Tasks</h2>
        <div class="task-list" v-for="todo in todoTask" :key="todo">
          <p class="task-input">{{ todo }}</p>
          <div class="task-control">
            <!-- <button>Edit</button> -->
            <button id="task-delete">Delete</button>
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
      todoTask: ['Eat breakfast', 'Check Submissions', 'Exercise'],
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;900&display=swap');

:root {
  font-family: 'Roboto', sans-serif;
}

body {
  background-color: rgb(49, 49, 49);
}

.container {
  padding: 1em 3em;
  

  #app-title {
    text-align: center;
    text-transform: uppercase;
    color: white;
    margin-bottom: 1em;
  }

  .todo-list {
    width: 60%;
    margin-inline: auto;

    .todo-input {
      position: relative;
      width: 50%;
      margin-inline: auto;
      display: flex;
      flex-direction: column;
      gap: .5em;


      #todo-title {
        position: absolute;
        top: -30px;
        // text-transform: uppercase;
        font-size: .9em;
        color: white;
        left: 0;
      }
      #task-input {
        border-radius: 4px;
        padding: .5em;
        font-size: .9rem;
        font-weight: 900;
      }

      #task-btn {
        padding: .5em;
        border-radius: 4px;
        border: none;
        background-color: rgb(23, 93, 93);
        color: white;
        font-size: .8rem;
        text-transform: uppercase;
        font-weight: 900;
      }
    }

    .todo-task {
      width: 50%;
      margin-inline: auto;
      color: white;
      display: flex;
      flex-direction: column;
      gap: .3em;

      h2 {
        border-bottom: 3px solid whitesmoke;
      }

      .task-list {
        padding: .5em;
        display: flex;
        align-items: center;
        border: 2px solid gray;
        border-radius: 8px;

        .task-input {
          margin: 0;
          flex-grow: 1;
        }

        .task-control {
          display: flex;
          gap: .4em;
          
          > * {
            height: 100%;
            border: none;
            background-color: transparent;
          }

          #task-delete {
            color: red;
            text-transform: uppercase;
            font-size: .8em;
            font-weight: 900;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
