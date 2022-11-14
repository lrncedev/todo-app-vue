<template>
  <div class="task-list" ref="task">
    <div class="grid">
      <div class="side">
        <nav class="">
          <div class="upper-link">
            <router-link to="/list">
              <font-awesome-icon class="fas" icon="fas fa-tasks" />
              Tasks
            </router-link>
            <router-link to="/list">
              <font-awesome-icon class="fas" icon="fas fa-exclamation-circle" />
              Important
            </router-link>
            <router-link to="/list">
              <font-awesome-icon class="fas" icon="fas fa-check-square" />
              Accomplished
            </router-link>
          </div>
          <div class="btn-last">
            <router-link to="/home">
              <font-awesome-icon class="fas" icon="fas fa-home" />
              Home
            </router-link>
          </div>
        </nav>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div> 
    <!-- <template v-if="modalShown">
      <FormComponent :formLabel="formLabel" class="modal" @click.self="this.modalShown = !this.modalShown" @sendPayload="getPayload($event)" />
    </template>
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
          <td >
            <div class="task-btns">
              <button class="edit">Edit</button>
              <button class="delete">Delete</button>
            </div>
            
          </td>
        </tr>
      </table>
    </div> -->
  </div>
</template>
<script>
// import FormComponent from '../components/FormComponent.vue'
export default {
  components: {
    // FormComponent
  },
  // props: {
  //   tasks: { type: Array}
  // },
  data() {
    return {
      formLabel: {
        title: "Task Title",
        description: "Task Description",
        deadLine: "Task Deadline"
      }, 
      tableValues: [],
      modalShown: false,
      tasks: [
        {
          title: 'Project Initialization',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ullam pariatur ratione aliquam.',
          deadline: '02-18-1999'
        },
        {
          title: 'Project Initialization',
          description: 'Lorem ipsum dolor sit amet adipisicing elit. Laboriosam ullam pariatur ratione aliquam.',
          deadline: '02-18-1999'
        },
        {
          title: 'Project Initialization',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ullam pariatur ratione aliquam.',
          deadline: '02-18-1999'
        },
      ],
    }
  },
  methods: {
    showModal() {
      this.modalShown = !this.modalShown;
      // this.$refs.task.style.backgroundColor = 'gray';
      // this.$refs.task.style.filter = 'blur(3px)';
    },
    getPayload(payload) {
      this.tasks.push({
        title: payload.taskTitle,
        description: payload.taskDescription,
        deadline: payload.taskDeadline
      })
      this.showModal();
    }
  }
  
}
</script>
<style lang="scss">
.grid {
  display: grid;
  height: calc(100vh - 40px);
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  .side { 
    grid-area: 1 / 1 / 6 / 2; 
    padding: 1em;
    background-color: #efefef;

    nav {
      display: flex;
      flex-direction: column;
      height: 100%;
      // padding: .8em 1em;
      // border-radius: 10px;
      background-color: white;
      // a {
      //   color: white;
      // }


      a {
        font-weight: 900;
        font-size: 120%;
        color: #E44232;
      }
      .upper-link {
        display: flex;
        padding: .8em 1em;
        flex-direction: column;
        gap: 1em;
        font-size: 100%;
        
        background-color: #FFF9F3;

        .fas {
          font-size: 120%;
          margin-right: .3em;
        }
        a {
          color: #E44232;
          font-weight: 900;
        }
      }
      .btn-last {
        padding: .8em 1em;
        margin-top: auto;
        background-color: #FFF9F3;
      }
    }
  }
  .content { grid-area: 1 / 2 / 6 / 6; } 
}



// .task-list {
//   height: calc(100vh - 40px);
//   padding: 2em;
  

  
//   .modal {
//     position: absolute;

//     min-width: 40%;
//     z-index: 1;
//     right: 0%;
//     margin: 0 auto;
//   }

//   .task-table {
//     display: flex;
//     flex-direction: column;
    
    
//     .btn-add {
//       align-self: flex-end;
      
//       margin-bottom: .7em;

//       button {
//         padding: .5em;
//         background-color: green;
//         color: white;
//         border: none;
//         border-radius: 6px;
//       }
//     }

//     table {
//       border: 1px solid gray;
//       width: 100%;
//       background-color: white;
//       border-radius: 4px;

//       .col-header {
//         background-color: green;
//         color: white;

//           .task-10 {
//             width: 10%;
//           }
//           .task-60 {
//             width: 60%;
//           }
//           .task-20 {
//             width: 20%;
//           }
//       }

//       td {
//         max-width: 0;
        
//       }
      
//       th,td {
//         overflow: hidden;
//         text-overflow: ellipsis;
//         border: 2px solid gray;
//         padding: .6em;
//       }

//       th {
//         border: 2px solid #eee;
//       }

//       .task-content {
//         text-align: center;

//         .task-desc {
//           overflow: hidden;
//           text-overflow: ellipsis;
//           white-space: nowrap;
//         }

//         .task-btns {
//           display: flex;
//           gap: .3em;
//           align-items: center;
//           justify-content: center;

//           button {
//             padding: .3em;
//             border-radius: 0;
//             border: none;
//             color: white;
//             font-weight: 900;
//           }

//           .edit {
//             background-color: blue;
//           }
//           .delete {
//             background-color: red;
//           }
//         }
//       }
//     }
//   }
// } 
</style>