<template>
  <div class="container">
    <div class="localButtons">
      <button class="save" @click="saveLocal">Save</button>
      <button class="load" @click="loadLocal">Load</button>
    </div>
    <h1 id="app-title">Todo Application</h1>
    <div class="todo-list">
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
      <div class="todo-task">
        <h2>Tasks</h2>
        <template v-if="Array.isArray(todoTask) && todoTask.length == 0">
          <div>
            <h1 class="text-center">No tasks to do for now 😁</h1>
          </div>
        </template>
        <template v-else>
          <div class="task-list" v-for="(todo, index ) in todoTask" :key="index">
            <div class="task-info">
              <p class="task-input">{{ todo.task }}</p>
              <p class="task-cat">{{ todo.category }}</p>
            </div>
            <div class="task-control">
              <button id="task-edit" @click="editTask(index, todo)">Edit</button>
              <button id="task-delete" @click="removeTask(index)">Delete</button>
            </div>
          </div>
        </template>
      </div>
    </div>
    <!-- <div id="modal" class="modal" ref="modal" @click.self="closeModal">
      <div class="modal-content">
        <span class="close" ref="close" @click.self="closeModal">&times;</span>
        <p> testg123</p>
      </div>
    </div> -->
  </div>
</template>

<script>

export default { 
  name: 'App',
  components: {
  },
  data() {
    return {
      formValues: {
        taskValue: '',
        categoryValue: ''
      },
      todoTask: [
        {
          task: 'Take a bath',
          category: 'Leisure'
        },
        // {
        //   task: 'Walk the dog',
        //   category: 'Exercise'
        // },
        // {
        //   task: 'Do assignments',
        //   category: 'Urgent'
        // },
      ],
      categories: ['Urgent', 'Leisure', 'Exercise']
    }
  },
  methods: {
    addTask() {
      this.todoTask.push(
        { task: this.formValues.taskValue, 
          category: this.formValues.categoryValue 
        });
        this.formValues.taskValue = '';
        this.formValues.categoryValue = '';
    },
    removeTask(index) {
      this.todoTask.splice(index, 1);
      // console.log(this.todoTask);
    },
    saveLocal() {
      console.log("Clicked");

      const objectArr = JSON.stringify(this.todoTask);

      localStorage.setItem('data', objectArr);
      console.log("Parsed: ", JSON.parse(objectArr));
    },
    loadLocal() {
      let storedArray = JSON.parse(localStorage.getItem("data"));
      console.log(storedArray);
      this.todoTask = storedArray;
    }
    // editTask() {
    //   this.$refs.modal.style.display = 'block';
    // },
    // closeModal() {
    //   this.$refs.modal.style.display = 'none';
    // }
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
  position: relative;


  .localButtons {
    position: absolute;
    right: 0;
    top: 0;

    display: flex;
    gap: .4em;
    z-index: 1;

    > * {
      padding: .4em;
      background-color: transparent;
      border: none;
      text-transform: uppercase;
      // border-bottom: 1px solid;
      font-size: 1.2em;
      border-radius: 4px;
    }

    .save {
      background-color: #fad005;
    }

    .load {
      background-color: blue;
      color: white;
    }
    
  }

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
      color: white;

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
        font-size: .9rem;
        font-weight: 900;
      }

      #task-category, #task-input, #task-btn  {
        padding: .5em;
      }

      #task-btn {
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


      .text-center {
        text-align: center;
      }

      h2 {
        border-bottom: 3px solid whitesmoke;
      }

      .task-list {
        padding: .5em;
        display: flex;
        flex-direction: column;
        // align-items: center;
        border: 2px solid gray;
        border-radius: 8px;


        .task-info {
          display: flex;
          align-items: center;
          border-bottom: 2px solid whitesmoke;
          margin-bottom: .4em;
          
          .task-input {
            margin: 0;
            font-size: 120%;
            font-weight: 900;
            flex-grow: 1;
          }

          .task-cat {
            font-size: 80%;
            font-weight: 100;
            color: gold;
          }
        }
        

        .task-control {
          display: flex;
          gap: .4em;
          
          > * {
            height: 100%;
            border: none;
            background-color: transparent;
          }

          #task-delete, #task-edit {
            // color: red;
            text-transform: uppercase;
            font-size: .8em;
            font-weight: 900;
            cursor: pointer;
          }

          #task-delete {
            color: red;
          }

          #task-edit { 
            color: greenyellow;
          }
        
        }
      }
    }
  }

  #modal {
    // display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 80%;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */

    .modal-content {
      background-color: #fefefe;
      margin: 10% auto; /* 15% from the top and centered */
      padding: 20px;
      border: 1px solid #888;
      width: 40%; /* Could be more or less, depending on screen size */
      min-height: 80%;
    }

    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }

    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }

  }
}
</style>
