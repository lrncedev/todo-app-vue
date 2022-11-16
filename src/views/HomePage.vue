<template >
  <div class="hero">
    <div class="hero-text">
      <h1 class="heading">
        Organize your task, <br>
        and be productive
      </h1>
      <p class="description">
        A personal project for better task management using Vue.
      </p>
      <div>
        <button class="accent-btn" @click="gotoTask">Try now</button>
      </div>
    </div>
    <div class="hero-img">
      <img src="https://ouch-cdn2.icons8.com/JoGv42xGg7mhJR1FwADWNMo5Qc3wRCJhwWk5IfHH5g8/rs:fit:512:384/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODgz/LzIzOWRmMzBhLTc2/M2ItNDY1MC1hNzU0/LTAxMWNkMmU4NWE0/ZS5wbmc.png" alt="illustration photo" class="hero-photo">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    gotoTask() {
      this.$router.push('/task')
    }
  }
}
</script>
<style lang="scss">
</style>