<template>
  <div class="container">
    <h1>Note Application</h1>
    <div class="note-input">
      <input type="text" name="note-text" id="note-text" placeholder="Title of the Note">
      <button id="note-btn" @click="add">Add</button>
    </div>
    <div class="note-list">
      <div 
        v-for="note in notes" 
        :key="note" 
        class="note"
      >
        <div class="note-header">
          <h2 class="note-title">{{ note }}</h2>
          <button class="close">x</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      colorArray:  ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'],
      notes: ['Test', 'Test2', 'test3']
    }
  },
  methods: {
    add() {
      this.notes.push('etasd');
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700;900&display=swap');


*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  line-height: 1.2;
  list-style: none;
  text-decoration: none;
}
:root {
  font-family: 'Roboto', sans-serif;
  --font-weight-light: 100;
  --font-weight-black: 900;
}
.container {
  h1 {
    text-align: center;
    font-weight: var(--font-weight-black);
    font-size: 3rem;
    margin-bottom: .5em;
  }

  .note-input {
    display: flex;
    margin-bottom: 2em;
    width: 60%;
    margin-inline: auto;
    #note-text {
      flex-grow: 1;
    }

    #note-btn {
      border: none;
      font-weight: var(--font-weight-light);
      padding: .5em;
      background-color: green;
      color: white;
    }
  }

  .note-list {
    padding: 3em 2em;
    height: minmax(67vh, 100vh);
    display: grid;
    gap: 1em;
    grid-template-columns: minmax(1fr, 1fr);

    .note {
      min-height: 200px;

      .note-header{
        display: flex;
        justify-content: space-between;

        .close {
          padding: .2em .6em;
          border: none;
          background-color: red;
          border-radius: 3px;
          color: white;
          font-family: var(--font-weight-black)
        }
      }
    }
  }
}

@media only screen and (min-width: 30em){
  .note-list {
    grid-template-columns: repeat(4, minmax(50px, 1fr));
  }
}

</style>
