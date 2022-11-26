<template >
  <div>
    <h1>Accomplished Task</h1>
    <p>{{ lists.taskDescription }}</p>
    <ul>
      <li v-for="(list, index) in lists" :key="list[index]">
        {{ list[index].taskDescription }}
      </li>
    </ul>
    <button @click="showProps">Test</button>
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
    this.showProps();
  },
};
</script>
<style lang="">
</style>