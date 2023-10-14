<template>
  <header>
    <nav-bar title="CRM"/>
  </header>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar,
  }
}
</script>

<style scoped lang="scss">
  header {
    width: 100%;
    height: 15vh;
    display: flex;
    flex-direction: row;
    background-color: burlywood;
  }
</style>
