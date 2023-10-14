<template>
  <main-header />
  <main>
    <slot />
  </main>
</template>

<script>
import MainHeader from './../Header/MainHeader.vue';

export default {
  components: {
    MainHeader,
  }
}
</script>

<style lang="scss" scoped>

</style>
