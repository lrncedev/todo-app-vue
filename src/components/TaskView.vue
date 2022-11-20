<template>
  <div class="task-view">
    <div class="task-header">
      <h1>Unfinished</h1>
      <div class="buttons">
        <div class="form-div">
          <form autocomplete="off" @submit.prevent="addTask" class="task-form">
            <div>
              <!-- <label for="task-input">Task Input</label> -->
              <input 
                type="text" 
                name="taskName" 
                id="task-input" 
                required 
                placeholder="Create your tasks here! Example: Take a dump"
                v-model="taskInput"
              >
              <button class="btn-accent" type="submit" >
                <font-awesome-icon icon="fas fa-plus-circle" class="btn-control accent" /> New
              </button> 
            </div>
          </form>
        </div>
        <div class="top">
          <button class="btn-dark">
            <font-awesome-icon icon="fas fa-download" class="btn-control "/> Load
          </button>
        </div>
      </div>
    </div>
    <div class="task-list">
      <div class="list-item" v-for="task in paginated" :key="task">
        <div class="task-input" >
          <p>{{ task }}</p>
        </div>
        <div class="task-control">
          <button class="btn-success">Mark as Done</button>
          <!-- <button class="btn-danger">Remove</button> -->
        </div>
      </div>
    </div>
    <div class="task-paginate">
      <button @click="prev" :disabled="current == 1"> Prev</button>
      <button @click="next" :disabled="current == getPageLength"> Next </button>
    </div>
    <!-- <template v-if="modalShown">
      <div id="task-form"  @click.self="showModal">   
        <form autocomplete="off" @submit.prevent="" class="task-form">   
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
          <label for="task-description">Task Description</label>
          <textarea 
          name="task-desc" 
          id="task-description" 
          cols="30" 
          rows="10" 
          placeholder="Comprehensive Description of the task"
          
          >
          </textarea>
          
          <div class="flex-2">
            <div>
              <label for="task-deadline">Task Deadline </label>
              <input type="date" id="task-deadline" name="task-deadline"  required>
            </div>
          </div>
          <div class="form-control">
            <button type="submit" id="task-btn" class="">Create Task</button>
          </div>
        </form>
      </div>
    </template> -->
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
        'Git Merge Fix',
        'Fix Pagination',
        'Backlog Fix',
        'Backup Prod Repository',
        'Start the next project',
        'Check SEO course',
        'Fix Tire',
        'Backlog Issue',
        'Backup Repository',
        'Start laravel project',
        'Check Web Dev course',
      ],
      modalShown: false,
      taskInput: '',
      // taskList: [],
      current: 1,
      pageSize: 6
    }
  },
  methods: {
    showModal() {
      this.modalShown = !this.modalShown;
      console.log("test")
    },
    addTask() {
      this.defaultTasks.push(this.taskInput);
      this.taskInput = "";
    },
    prev() {
      this.current--;
      console.log(this.current);
    },
    next() {
      this.current++;
      console.log(this.current);
    },
    
  },
  computed: {
    indexStart() {
      return (this.current - 1) * this.pageSize;
    },
    indexEnd() {
      return this.indexStart + this.pageSize;
    },
    paginated() {
      return this.defaultTasks.slice(this.indexStart, this.indexEnd);
    },
    getPageLength() {
      return Math.ceil(this.defaultTasks.length / this.pageSize);
    }
  },
  // mounted() {
  //   this.getPageLength();
  // }
}
</script>
<style lang="scss">
@import '@/styles/_form.scss';
@import '@/styles/_variables.scss';
.task-view {
  display: flex;
  height: 100%;
  flex-direction: column;


 
  .task-header {
    display: flex;
    flex-direction: column;
    gap: .8em;
    color: white;
    // align-items: center;
    margin-bottom: 1.5em;

    h1 {
      flex-grow: 1;
    }
    
    .buttons {
      display: flex;
      width: 100%;
      gap: .8em;
      position: relative;

        .form-div {
          display: flex;
          align-items: center;
          flex-grow: 1;
          // background-color: yellow;

          form {
            width: 100%;
          }
          div {
            display: flex;
            align-items: center;
            justify-content: center;
            #task-input {
            padding: .3em;
            width: 100%; 
            }
          }

          
        }

        .top {
          position: absolute;
          top: -150%;
          right: 0;
        }
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

  .task-paginate {
    // background-color: black;
    margin-top: auto;
    text-align: center;

    button {
      border: none;
      // background-color: $accent-color;
      // color: white;
      padding: .4em .5em;
      border-radius: 4px;
      font-weight: 900;
      margin-right: .5em;
    }
    // justify-self: end ;
  }
  #task-form {
    background-color: #325b76;

    // .task-form {
    //   width: 50%;
    //   margin: 0 auto;
    // }
  }
}
</style>