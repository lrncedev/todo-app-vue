<template>
  <div class="task-list" ref="task">
    <div class="grid">
      <div class="side">
        <nav class="">
          <div class="upper-link">
            <router-link to="/todo-app-vue/task">
              <font-awesome-icon class="fas" icon="fas fa-tasks" />
              Tasks
            </router-link>
            <router-link to="/todo-app-vue/accomplished">
              <font-awesome-icon class="fas" icon="fas fa-check-square" />
              Accomplished
            </router-link>
          </div>
        </nav>
      </div>
      <div class="content">
        <router-view
          @accomplishedTask="accomplishedList"
          :lists="accomplished"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // accomplishedArray: Array,
  },
  data() {
    return {
      formLabel: {
        title: "Task Title",
        description: "Task Description",
        deadLine: "Task Deadline",
      },
      accomplished: [],
      modalShown: false,
      tasks: [
        {
          title: "Project Initialization",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ullam pariatur ratione aliquam.",
          deadline: "02-18-1999",
        },
        {
          title: "Project Initialization",
          description:
            "Lorem ipsum dolor sit amet adipisicing elit. Laboriosam ullam pariatur ratione aliquam.",
          deadline: "02-18-1999",
        },
        {
          title: "Project Initialization",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ullam pariatur ratione aliquam.",
          deadline: "02-18-1999",
        },
      ],
    };
  },
  methods: {
    showModal() {
      this.modalShown = !this.modalShown;
    },
    getPayload(payload) {
      this.tasks.push({
        title: payload.taskTitle,
        description: payload.taskDescription,
        deadline: payload.taskDeadline,
      });
      this.showModal();
    },
    accomplishedList(data) {
      this.accomplished.push(data);
      console.log("from emitted shit: ", data);
      console.log(typeof this.accomplished);
      console.log(this.accomplished);
    },
  },
};
</script>
<style lang="scss">
@import "@/styles/_variables.scss";
.grid {
  display: grid;
  height: calc(100vh - 70px);
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);

  grid-column-gap: 0px;
  grid-row-gap: 0px;

  .side {
    grid-area: 1 / 1 / 6 / 2;
    padding: 1em;
    height: 100%;
    background-color: #efefef;

    nav {
      display: flex;
      flex-direction: column;
      height: 100%;

      background-color: white;

      a {
        font-weight: 900;
        font-size: 105%;
        color: #e44232;
      }

      .upper-link {
        display: flex;
        padding: 0.8em 1em;
        flex-direction: column;
        font-size: 100%;

        background-color: $secondary-color;

        .fas {
          font-size: 120%;
          margin-right: 0.3em;
        }
        a {
          padding: 0.5em;
          color: $text-color;
        }
      }
      .btn-last {
        padding: 0.8em 1em;
        margin-top: auto;
        background-color: #fff9f3;
      }
    }
  }
  .content {
    grid-area: 1 / 2 / 6 / 6;
    padding: 2em;
    background: url("https://i.pinimg.com/736x/32/0a/ad/320aad83853f55e0b4d896113ffd7529.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100%;
  }
}
</style>