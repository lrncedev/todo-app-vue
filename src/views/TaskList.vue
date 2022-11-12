<template>
  <div class="full-height padding-md task-list">
    <FormComponent :formLabel="formLabel" v-model="modalShown"/>
    <div class="task-table">
      <div class="btn-add">
        <button @click="showModal">Add new task</button>
      </div>
      <table>
        <tr class="col-header">
          <th class="task-20">Task Title</th>
          <th class="task-60">Task Description</th>
          <th class="task-10">Deadline</th>
          <th class="task-20">Action</th>
        </tr>
        <tr v-for="task in tasks" :key="task" class="task-content">
          <td>{{ task.title }}</td>
          <td class="task-desc">{{ task.description }}</td>
          <td>{{ task.deadline }}</td>
          <td>
            <button>Change</button>
            <button>Delete</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import FormComponent from '../components/FormComponent.vue'
export default {
  components: {
    FormComponent
  },
  props: {
    tasks: { type: Array}
  },
  data() {
    return {
      formLabel: {
        title: "Task Title",
        description: "Task Description",
        deadLine: "Task Deadline"
      }, 
      tableValues: [],
      modalShown: false
    }
  },
  methods: {
    showModal() {
      this.modalShown = !this.modalShown;
    }
  }
  
}
</script>
<style lang="scss">
.task-list {

  .task-table {
    display: flex;
    flex-direction: column;
    
    
    .btn-add {
      align-self: flex-end;
      margin-bottom: .7em;

      button {
        padding: .5em;
        background-color: green;
        color: white;
        border-radius: 6px;
      }
    }

    table {
      // table-layout: fixed;
      border: 1px solid gray;
      width: 100%;
      background-color: white;
      border-radius: 4px;


      .col-header {
        background-color: green;
        color: white;

          .task-10 {
            width: 10%;
          }
          .task-60 {
            width: 60%;
          }
          .task-20 {
            width: 20%;
          }
      }

      td {
        max-width: 0;
        
      }
      
      th,td {
        overflow: hidden;
        text-overflow: ellipsis;
        border: 2px solid gray;
        padding: .6em;
      }

      th {
        border: 2px solid #eee;
      }

      .task-content {
        text-align: center;

        .task-desc {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
} 
</style>