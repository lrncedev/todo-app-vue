<template>
  <div class="task-view">
    <div class="task-header">
      <h1>Unfinished</h1>
      <div class="buttons">
        <div>
          <button>
            <font-awesome-icon icon="fas fa-plus-circle" class="btn-control accent"/> New
          </button> 
        </div>
        <div>
          <button>
            <font-awesome-icon icon="fas fa-download" class="btn-control "/> Load
          </button>
        </div>
      </div>
    </div>
    <div class="task-list">
      <div class="list-item"></div>
      <div class="list-item"></div>
      <div class="list-item"></div>
      <div class="list-item"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewTask'
}
</script>
<style lang="scss">
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
          background-color: black;
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
    }
    
  }

  .task-list {
    display: flex;
    flex-direction: column;
    gap: .3em;
    .list-item {
      background-color: white;
      padding: 1.3em;
      border-radius: 3px;
    }
  }
}
</style>