<template>
  <nav>
    <h1>
      {{ title }}
    </h1>
    <nav-links />
  </nav>
</template>

<script>
import NavLinks from "./NavLinks.vue";

export default {
  components: {
    NavLinks
  },
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  },

  setup({ title }) {

    return {
      title
    }
  }
}
</script>

<style lang="scss" scoped>
  nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    h1 {
      font-size: 40px;
      color: rebeccapurple;
    }
  }
</style>

