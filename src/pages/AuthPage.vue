<template>
  <div class="wrapper">
    <div class="btns-wrapper">
      <base-button
        v-if="onLoginPage"
        btn-title="Login"
        @btn-click="$router.push('/auth')"
        btn-value="login"
      />
      <base-button
        v-if="onAuthPage"
        btn-title="Create Account"
        @btn-click="$router.push('/auth/registration')"
        btn-value="registration"
      />
    </div>
    <router-view />
  </div>
</template>

<script>
import { useRoute} from "vue-router";
import { computed } from "vue";

export default {

  setup() {
    const route = useRoute();

    const onAuthPage = computed(() =>  route.fullPath !== '/auth/registration' )
    const onLoginPage = computed(() => route.fullPath !== '/auth');

    return {
      onAuthPage,
      onLoginPage
    }
  }
}

</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #4e4e4e;
}

.btns-wrapper {
  width: 500px;
  display: flex;
  justify-content: space-around;
}

</style>
