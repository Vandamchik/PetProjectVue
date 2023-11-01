<template>
  <ul>
    <router-link to="/auth" >Authenticate</router-link >
    <li>Section 1</li>
    <li>Section 2</li>
  </ul>
</template>

<script>

</script>

<style scoped lang="scss">
  ul {
    width: 30vw;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      list-style-type: none;
      font-size: 30px;
    }
  }
</style>
