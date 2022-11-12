<template >
  <div class="full-height padding-md hero-section">
    <div class="todo-intro">
      <h1>Todo Application</h1>
      <h2>A personal project for better task management in a browser application</h2>
      <!-- <h3>- built with Vue JS, Vue Router 4, Scss and LocalStorage</h3> -->
      <div>
        <router-link to="/list" class="btn">Try now</router-link>
      </div>
    </div>
    <img src="https://ouch-cdn2.icons8.com/JoGv42xGg7mhJR1FwADWNMo5Qc3wRCJhwWk5IfHH5g8/rs:fit:512:384/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODgz/LzIzOWRmMzBhLTc2/M2ItNDY1MC1hNzU0/LTAxMWNkMmU4NWE0/ZS5wbmc.png" alt="illustration photo" class="hero-photo">
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.full-height {
  height: 100vh;
  position: relative;
  .todo-intro {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 70%;

    h1 {
      font-weight: 900;
      font-size: 4.2em;
      margin-bottom: .3em;
    }

    h2 {
      font-weight: 400;
      font-size: 3.5em;
      line-height: .9;
      margin-bottom: .3em;
      font-family: 'Dancing Script', cursive;
    }

    h3 {
      font-weight: 100;
      font-size: 1.8em;
      font-family: 'Dancing Script', cursive;
    }
  }
  .btn {
    margin-top: 1em;
    padding: .3em;
    color: white;
    font-size: 1.2em;
    background-color: #82563a;
    border: 4px;
  }

  .hero-photo {
    position: absolute;
    right: 3%;
    z-index: 1;
    top: 20%;
  }
}

.hero-section {
  display: flex;
  align-items: center;
}
</style>