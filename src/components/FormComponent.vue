<template>
  <div class="form-div">
    <div id="task-form">      
      <form autocomplete="off" @submit.prevent="addTask">
        <h1>Create new Task</h1>
        <label for="task-input">{{ formLabel.title }}</label>
        <input 
          type="text" 
          name="taskName" 
          id="task-input" 
          required 
          placeholder="Ex. Initialize Project Development"
          v-model="formValues.taskTitle"
        >
        <label for="task-description">{{ formLabel.description }}</label>
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
            <label for="task-deadline">{{ formLabel.deadLine }}: </label>
            <input type="date" id="task-deadline" name="task-deadline" v-model="formValues.taskDeadline" required><!-- min="2018-01-01" max="2018-12-31" -->
          </div>
        </div>
        <div class="form-control">
          <button type="submit" id="task-btn" class="">Create Task</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormComponent',
  props: {
    formLabel: {
      title: String,
      description: String,
      deadLine: String
    }
  },
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
      // console.log("FORM VALUES", this.formValues);
      this.$emit('sendPayload', this.formValues);
      // this.formValues.taskTitle = "";
      // this.formValues.taskDescription = "";
      // this.formValues.taskDeadline = "";
    }
  }

}
</script>
<style lang="scss">
  .form-div {
    width: 100%;
    height: 90%;

    background-color: rgb(62, 62, 62);

    #task-form{
      margin: 0 auto;
      display: flex;
      height: 100%;
      width: 50%;

      padding: 1em 0;

      form {
        padding: 2em;
        display: flex;
        gap: .4em;
        flex-direction: column;
        width: 100%;
        border-radius: 6px;
        background-color: #eee;

        h1 {
          text-align: center;
        }

        label {
          font-size: 1.2em;
          font-weight: 900;
          color: rgb(119, 0, 123);
        }

        textarea {
          padding: .5em;
          resize: none;
          border-radius: 5px;
        }

        textarea::placeholder, input::placeholder {
          font-size: 120%;
          font-weight: 400;
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