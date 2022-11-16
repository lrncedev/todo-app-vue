<template>
  <div class="app">
    <nav class="app-nav">
      <div class="logo"><router-link to="/">Unfinished</router-link></div>
      <div class="links">
        <router-link to="/task">Tasks</router-link>
        <router-link to="/list">About</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>
  <!-- <div class="side">
    <div class="side-nav">
      <nav class="router-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/list">Tasklist</router-link>
      </nav>
    </div>
    <div class="template-view">
      <router-view/>
    </div>
  </div> -->
    <!-- <div class="localButtons">
      <button class="save" @click="saveLocal">Save</button>
      <button class="load" @click="loadLocal" :disabled="todoTask < 1">Load</button>
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
    </div> -->
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {

    };
  },
  methods: {
    addTask() {
      this.todoTask.push({
        task: this.formValues.taskValue,
        category: this.formValues.categoryValue,
      });
      this.formValues.taskValue = "";
      this.formValues.categoryValue = "";
    },
    removeTask(index) {
      this.todoTask.splice(index, 1);
      // console.log(this.todoTask);
    },
    saveLocal() {
      console.log("Clicked");

      const objectArr = JSON.stringify(this.todoTask);

      localStorage.setItem("data", objectArr);
      console.log("Parsed: ", JSON.parse(objectArr));
    },
    // loadLocal() {
    //   let storedArray = JSON.parse(localStorage.getItem("data"));
    //   console.log(storedArray);
    //   this.todoTask = storedArray;
    // },
    // editTask() {
    //   this.$refs.modal.style.display = 'block';
    // },
    // closeModal() {
    //   this.$refs.modal.style.display = 'none';
    // }
  },
  mounted() {
    // this.loadLocal();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;900&display=swap");
// @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');

@import '@/styles/_variables.scss';

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
}

:root {
  font-family: "Roboto", sans-serif;

  --font-inter: 'Inter', sans-serif;
}

.app {
  background-color: $main-color;
  color: $text-color;

  .app-nav {
    display: flex;
    align-items: center;
    margin-inline: auto;
    padding: 1em 1em;
    // height: 40px;
    color: $text-color;
    background-color: $main-color;

    a {
      color: $text-color;
    }

    .logo {
      flex-grow: 1;
      
      a {
        // text-transform: uppercase;
        font-weight: 900;
        font-size: 200%;
      }
    }

    .links {
      display: flex;
      gap: 1em;

      a {
        font-weight: 600;
      }
    }
  }

  .hero {
    padding: 4.5em;
    margin-inline: auto;
    height: calc(100vh - 70px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 80%;

    .hero-text {
      display: flex;
      padding-left: 2em;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1.3em;

      .heading {
        font-weight: 900;
        font-size: 350%;
      }

      .description {
        font-family: var(--font-inter);
        font-weight: 100;
        font-size: 2em;
        color: $text-color;
      }
    }

    .hero-img {
      position: relative;
      background-color: $second-accent;

      .hero-photo {
        width: 100%;
        position: absolute;
        z-index: 1;
        bottom: -130px;
        right: -30px;
      }
    }
  }

  .accent-btn {
    background-color: $accent-color;
    padding: .6em 1.2em;
    font-size: 110%;
    font-family: var(--font-inter);
    font-weight: 700;
    border: none;
    border-radius: 6px;
    color: white;
  }
}
</style>
