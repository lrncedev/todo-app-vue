<template>
  <div class="task-view">
    <div class="task-header">
      <h1>Tasks</h1>
      <div class="buttons">
        <div class="form-div">
          <form autocomplete="off" @submit.prevent="addTask" class="task-form">
            <div>
              <input
                type="text"
                name="taskName"
                id="task-input"
                required
                placeholder="Create your tasks here! Example: Take a dump"
                v-model="taskInput"
              />
              <button class="btn-accent" type="submit">
                <font-awesome-icon
                  icon="fas fa-plus-circle"
                  class="btn-control accent"
                />
                New
              </button>
            </div>
          </form>
        </div>
        <div class="top">
          <button
            class="btn-dark"
            @click="loadFromLocal"
            :disabled="isLocalEmpty === 0"
          >
            <font-awesome-icon icon="fas fa-download" class="btn-control" />
            Load
          </button>
          <button
            class="btn-save"
            @click="saveToLocal"
            :disabled="isArrayEmpty"
          >
            <font-awesome-icon icon="fas fa-save" class="btn-control" /> Save
          </button>
        </div>
      </div>
    </div>
    <div class="task-list">
      <template v-if="isArrayEmpty">
        <div class="text-center">
          <h1 class="">No tasks to do for now 😁</h1>
        </div>
      </template>
      <template v-else>
        <div class="list-item" v-for="(task, index) in paginated" :key="task">
          <div class="task-input">
            <p>{{ task }}</p>
          </div>
          <div class="task-control">
            <button class="btn-success" @click="done(index, task)">
              Mark as Done
            </button>
          </div>
        </div>
      </template>
    </div>
    <template v-if="!isArrayEmpty">
      <div class="task-paginate">
        <button @click="prev" :disabled="current == 1">Prev</button>
        Page {{ current }} of {{ getPageLength }}
        <button @click="next" :disabled="current == getPageLength">Next</button>
      </div>
    </template>
    <div class="toast" ref="toast">
      <h3>Saved to Local Storage</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewTask",
  components: {},

  data() {
    return {
      defaultTasks: [
        "SCRUM Meeting with Team",
        "Client Task Fix",
        "Curriculum Override",
        "Git Merge Fix",
        "Fix Pagination",
        // 'Backlog Fix',
        // 'Backup Prod Repository',
        // 'Start the next project',
        // 'Check SEO course',
        // 'Fix Tire',
        // 'Backlog Issue',
        // 'Backup Repository',
        // 'Start laravel project',
        // 'Check Web Dev course',
      ],
      modalShown: false,
      taskInput: "",
      // taskList: [],
      current: 1,
      pageSize: 6,
      accomplishedTask: [],
    };
  },
  methods: {
    addTask() {
      this.defaultTasks.push(this.taskInput);
      this.taskInput = "";
    },
    prev() {
      this.current--;
    },
    next() {
      this.current++;
    },
    saveToLocal() {
      this.showToast();
      setTimeout(() => {
        this.$refs.toast.classList.add("hide");
      }, 2000);
      this.$refs.toast.classList.remove("hide");

      const objectArr = JSON.stringify(this.defaultTasks);

      localStorage.setItem("data", objectArr);
      // console.log("Parsed: ", JSON.parse(objectArr));
      this.$router.push("/todo-app-vue/task");
    },
    loadFromLocal() {
      let storedArray = JSON.parse(localStorage.getItem("data"));
      // console.log(storedArray);
      this.defaultTasks = [...storedArray];
      // console.log("NEW DEFAULT TASKS", this.defaultTasks);
    },
    showToast() {
      this.$refs.toast.classList.add("show");
      setTimeout(() => {
        this.$refs.toast.classList.remove("show");
      }, 2000);
    },
    checkLocalStorage() {
      const LOCAL_SIZE = window.localStorage.length;

      // console.log("local storage size: ",LOCAL_SIZE);

      if (LOCAL_SIZE != 0) {
        if (localStorage.getItem("data") === null) {
          // console.log("Data Key is NULL")
        } else {
          // console.log('data key is not empty');
          this.loadFromLocal();
        }
      } else {
        // console.log("localstorage EMPTY");
      }
    },
    done(index, task) {
      // const currentDate = new Date();
      // console.log(currentDate);
      let currentDateWithFormat = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "-");
      // console.log(currentDateWithFormat);
      // console.log(task);
      this.accomplishedTask.push({
        taskDescription: task,
        accomplishedDate: currentDateWithFormat,
      });
      this.$emit("accomplishedTask", this.accomplishedTask);
      // console.log("Tasks done: ", this.accomplishedTask);
      this.defaultTasks.splice(index, 1);
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
    },
    isArrayEmpty() {
      if (Array.isArray(this.defaultTasks) && this.defaultTasks.length == 0) {
        return true;
      } else {
        return false;
      }
    },
    isLocalEmpty() {
      return window.localStorage.length;
    },
  },
  mounted() {
    this.checkLocalStorage();
  },
};
</script>
<style lang="scss">
@import "@/styles/_form.scss";
@import "@/styles/_variables.scss";
.task-view {
  display: flex;
  height: 100%;
  flex-direction: column;

  .task-header {
    display: flex;
    flex-direction: column;
    gap: 0.8em;
    color: white;
    // align-items: center;
    margin-bottom: 1.5em;

    h1 {
      flex-grow: 1;
    }

    .buttons {
      display: flex;
      width: 100%;
      gap: 0.8em;
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
            padding: 0.3em;
            width: 100%;
          }
        }
      }

      .top {
        display: flex;
        gap: 1em;
        position: absolute;
        top: -150%;
        right: 0;
      }

      button {
        display: flex;
        align-items: center;
        gap: 0.4em;

        border: none;
        border-radius: 3px;
        cursor: pointer;
        padding: 0.4em 1em;
        color: white;
        font-weight: 500;

        .btn-control {
          font-size: 150%;
        }
      }

      .btn-accent {
        background-color: $accent-color;
      }

      button[disabled] {
        background-color: gray;
      }

      .btn-dark {
        background-color: gold;
        color: black;
      }
      .btn-save {
        background-color: green;
        color: white;
      }
    }
  }

  .task-list {
    display: flex;
    flex-direction: column;
    gap: 0.3em;

    .text-center {
      text-align: center;
      font-size: 120%;
      margin-top: 10%;
    }

    .list-item {
      display: flex;
      align-items: center;
      background-color: white;
      padding: 0.8em;

      border-radius: 3px;
      font-size: 120%;
      color: $secondary-color;

      .task-input {
        flex-grow: 1;
      }
      .task-control {
        display: flex;
        gap: 0.5em;

        button {
          border: none;
          font-size: 80%;
          padding: 0.4em 0.2em;
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;

    button {
      border: none;
      // background-color: $accent-color;
      // color: white;
      padding: 0.4em 0.5em;
      border-radius: 4px;
      font-weight: 900;
      // margin-right: .5em;
    }
    // justify-self: end ;
  }

  .toast {
    position: absolute;
    top: -100px;
    right: 0;
    overflow: hidden;
    opacity: 1;
    text-align: center;
    width: 20%;
    background-color: rgb(14, 143, 14);
    padding: 1em 0.5em;
    font-weight: 100;
    border-radius: 5px;
    text-align: center;
  }

  .toast.show {
    animation: display 1s ease-in forwards;
  }

  @keyframes display {
    0% {
      transform: translateY(0);
    }
    // 25% {
    //   transform: translateY(150%);
    // }
    // 50% {
    //   transform: translateY(150%);
    // }
    100% {
      transform: translateY(300%);
    }
  }
  .toast.hide {
    animation: hide 1s ease forwards;
  }

  @keyframes hide {
    0% {
      transform: translateY(300%);
    }
    100% {
      transform: translateY(0);
    }
  }
}
</style>