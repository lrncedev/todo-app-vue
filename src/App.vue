<template>
  <div class="container">
    <h1>Note Application</h1>
    <div class="note-input">
      <input type="text" name="note-text" id="note-text" placeholder="Title of the Note">
      <button id="note-btn" @click="add">Add</button>
    </div>
    <div class="note-list">
      <div class="note" v-for="note in notes" :key="note">
      {{ note }}</div>
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
  height: 100vh;
}
.container, .note-input{
  width: 60%;
  margin-inline: auto;

  h1 {
    text-align: center;
    font-weight: var(--font-weight-black);
    font-size: 3rem;
    margin-bottom: .5em;
  }

  .note-input {
    display: flex;
    margin-bottom: 2em;

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
}

</style>
