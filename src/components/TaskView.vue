<template>
  <div class="task-view">
    <div class="task-header">
      <h1>Unfinished</h1>
      <div class="buttons">
        <div>
          <button class="btn-accent" @click="showModal">
            <font-awesome-icon icon="fas fa-plus-circle" class="btn-control accent" /> New
          </button> 
        </div>
        <div>
          <button class="btn-dark">
            <font-awesome-icon icon="fas fa-download" class="btn-control "/> Load
          </button>
        </div>
      </div>
    </div>
    <div class="task-list">
      <div class="list-item" v-for="task in defaultTasks" :key="task">
        <div class="task-input" >
          <p>{{ task }}</p>
        </div>
        <div class="task-control">
          <button class="btn-success">Mark as Done</button>
          <!-- <button class="btn-danger">Remove</button> -->
        </div>
      </div>
    </div>
    <template v-if="modalShown">
      <div id="task-form"  @click.self="showModal">   
        <!-- <h1>Create new Task</h1>    -->
        <form autocomplete="off" @submit.prevent="addTask" class="task-form">   
          <div>
            <label for="task-input">Task Input</label>
            <input 
              type="text" 
              name="taskName" 
              id="task-input" 
              required 
              placeholder="Ex. Initialize Project Development"
            >
          </div>
          <!-- <label for="task-description">Task Description</label>
          <textarea 
          name="task-desc" 
          id="task-description" 
          cols="30" 
          rows="10" 
          placeholder="Comprehensive Description of the task"
          
          >
          </textarea> -->
          
          <!-- <div class="flex-2">
            <div>
              <label for="task-deadline">Task Deadline </label>
              <input type="date" id="task-deadline" name="task-deadline"  required>
            </div>
          </div> -->
          <div class="form-control">
            <button type="submit" id="task-btn" class="">Create Task</button>
          </div>
        </form>
      <!-- <h1>Test</h1> -->
      </div>
      
    </template>
  </div>
</template>
<script>
// import FormComponent from '../components/FormComponent.vue'
export default {
  name: 'NewTask',
  components: {
    // FormComponent
  },
  data() {
    return {
      defaultTasks: [
        'SCRUM Meeting with Team',
        'Client Task Fix',
        'Curriculum Override',
        'Git Merge Fix'
      ],
      modalShown: true
    }
  },
  methods: {
    showModal() {
      this.modalShown = !this.modalShown;
      console.log("test")
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/_form.scss';
@import '@/styles/_variables.scss';
.task-view {

  .task-header {
    display: flex;
    gap: .8em;
    color: white;
    align-items: center;
    margin-bottom: 1.5em;

    h1 {
      flex-grow: 1;
    }
    
    .buttons {
      display: flex;
      align-items: center;
      gap: .8em;

        button {
          display: flex;
          align-items: center;
          gap: .4em;
          
          border: none;
          border-radius: 3px;
          cursor: pointer;
          padding: .4em 1em;
          color: white;
          font-weight: 500;

          .btn-control {
            font-size: 150%;
          }  
        }

        .btn-accent {
          background-color: $accent-color;
        }

        .btn-dark {
          background-color: gold;
          color: black;
        }
    }
    
  }

  .task-list {
    display: flex;
    flex-direction: column;
    gap: .3em;
    
    .list-item {  
      display: flex;
      align-items: center;
      background-color: white;
      padding: .8em;
      
      border-radius: 3px;
      font-size: 120%;
      color: $secondary-color;

      .task-input {
        flex-grow: 1;
      }
      .task-control {
        display: flex;
        gap: .5em;
        
        button {
          border: none;
          font-size: 80%;
          padding: .4em .2em;
          border-radius: 3px;
          background-color: transparent;
          color: $text-color;
        }

        .btn-success {
          background-color: $secondary-color;
        }

        .btn-danger {
          background-color: $secondary-color;
        }
      }
    }
  }

  #task-form {
    background-color: #325b76;

    .task-form {
      width: 50%;
      margin: 0 auto;
    }
  }
}
</style>