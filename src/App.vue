<template>
  <div class="app">
    <nav class="app-nav">
      <div class="logo"><router-link to="/">Unfinished</router-link></div>
      <div class="links">
        <router-link to="/task">Tasks</router-link>
      </div>
    </nav>
    <HomePage/>
  </div>
</template>
<script>
import HomePage from './views/HomePage.vue';
export default {
  name: "App",
  components: {
    HomePage
  },
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
  },
  mounted() {
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
