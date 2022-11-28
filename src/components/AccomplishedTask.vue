<template >
  <div class="accomplished">
    <div class="accom-header">
      <h1>Accomplished Tasks</h1>
      <button @click="showProps">
        <!-- @click="loadFromLocal"
            :disabled="isLocalEmpty === 0" -->
        <font-awesome-icon icon="fas fa-download" class="btn-control" />
        Load
      </button>
    </div>
    <div class="accom-list">
      <div class="list-item" v-for="(list, index) in lists" :key="list[index]">
        <div class="task-input">
          <p>{{ list[index].taskDescription }}</p>
        </div>
        <div class="task-control">
          <button class="btn-danger" @click="done(index, list)">remove</button>
        </div>
      </div>
    </div>
    <!-- <p>{{ lists.taskDescription }}</p>
    <ul>
      <li v-for="(list, index) in lists" :key="list[index]">
        {{ list[index].taskDescription }}
      </li>
    </ul> -->
    <!-- <button @click="showProps">Test</button> -->
  </div>
</template>
<script>
export default {
  name: "AccomplishedTask",
  props: {
    lists: {
      type: Array,
      required: false,
      default: () => [{ id: 0, task: "No Tasks Provided", finished: false }],
    },
  },
  methods: {
    showProps() {
      console.log(this.lists);
    },
  },
  mounted() {
    // this.showProps();
  },
  computed: {
    // paginated() {
    //   return this.defaultTasks.slice(this.indexStart, this.indexEnd);
    // },
  },
};
</script>
<style lang="scss">
@import "@/styles/_form.scss";
@import "@/styles/_variables.scss";
.accomplished {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .accom-header {
    display: flex;
    h1 {
      flex-grow: 1;
    }
    button {
      padding: 0.5em 1em;
      background-color: gold;
      font-weight: 900;
      border: none;
      border-radius: 4px;
    }
  }

  .accom-list {
    .list-item {
      display: flex;
      align-items: center;
      background-color: white;
      padding: 0.8em;
      margin-bottom: 0.4em;

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
          font-size: 70%;
          padding: 0.5em 1em;
          border-radius: 4px;
          font-weight: 900;
          background-color: transparent;
          color: $text-color;
        }

        .btn-danger {
          text-transform: uppercase;
          background-color: red;
        }
      }
    }
  }
}
</style>