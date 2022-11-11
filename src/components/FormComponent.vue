<template>
  <div class="full-height padding-md form-div">
    <div class="storageButtons">
      <!-- <button class="action-btn save" @click="showModal">Add new task</button> -->
      <!-- <button class="action-btn save" @click="saveLocal">Save</button>
      <button class="action-btn load" @click="loadLocal" :disabled="todoTask < 1">Load</button> -->
    </div>
    <div id="task-form" >
      <form autocomplete="off" @submit.prevent="addTask">
        <label for="task-input">Task Title</label>
        <input 
          type="text" 
          name="taskName" 
          id="task-input" 
          required 
          placeholder="Ex. Initialize Project Development"
          v-model="formValues.taskTitle"
        >
        <label for="task-description">Task Description</label>
        <textarea 
        name="task-desc" 
        id="task-description" 
        cols="30" 
        rows="10" 
        placeholder="Comprehensive Description of the task"
        v-model="formValues.taskDescription"
        >
        </textarea>
        
        <div class="flex-2">
          <div>
            <label for="task-deadline">Deadline: </label>
            <input type="date" id="task-deadline" name="task-deadline" v-model="formValues.taskDeadline"><!-- min="2018-01-01" max="2018-12-31" -->
          </div>
        
          <!-- <div>
            <label for="task-category">Category: </label>
            <select name="taskCat" id="task-category" required v-model="formValues.taskCategory">
              <option value="">Test</option>
              <option value="">Test2</option>
              <option value="">Test3</option>
            </select>
          </div> -->
        </div>
        <div class="form-control">
          <button type="submit" id="task-btn" class="">Add Task</button>
        </div>
      </form>
      <!-- <div class="control">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam harum libero ipsa optio facilis, provident blanditiis repellat vel. Cupiditate, pariatur?</p>
      </div> -->
    </div>
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
  data() {
    return {
      isShown: false,
      formValues: {
        taskTitle: '',
        taskDescription: '',
        taskDeadline: '',
        // taskCategory: ''
      }
    }
  },
  methods: {
    addTask() {
      console.log(this.formValues);

      this.formValues.taskTitle = "";
      this.formValues.taskDescription = "";
      this.formValues.taskDeadline = "";
    }
  }

}
</script>
<style lang="scss">
  .form-div {
    // background-color: red;
    .storageButtons {
      display: flex;
      gap: 1em;
      align-items: center;
      justify-content: end;

      .action-btn {
        padding: .6em;
        background-color: transparent;
        border: none;
        font-size: .9em;
        font-weight: 900;
        color: white;
        border-radius: 3px;
      }

      .save {
        background-color: green;
      }
    }

    #task-form{
      display: grid;
      height: 90vh;
      grid-template-columns: 1fr;
      grid-auto-rows: 60vh 10vh;

      form {
        padding: 2.5em;
        display: flex;
        border-radius: 10px;
        flex-direction: column;
        background-color: white;
        gap: .3em;
        
        textarea {
          padding: .5em;
          resize: none;
          border-radius: 5px;
        }

        textarea::placeholder, input::placeholder {
          font-size: 120%;
          font-weight: 400;
        }

        label {
          font-size: 1.2em;
          font-weight: 400;
          color: rgb(119, 0, 123);
        }

        input[type="text"] {
          padding: .5em;
          font-family: "Roboto", sans-serif;
          border-radius: 5px;
        }

        .flex-2 {
          display: flex;
          align-items: center;
          gap: 2em;

          div {
            display: flex;
            gap: .5em;
            align-items: center;
          }
        }

        .form-control {
          text-align: right;

          #task-btn {
            padding: .6em;
            background-color: green;
            border: none;
            font-size: .9em;
            font-weight: 900;
            color: white  ;
            border-radius: 3px;
          }
        }
      }
    }
  }
</style>