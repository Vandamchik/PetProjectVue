<template>
  <div class="wrapper">
    <registration-form />
    <login-from />
  </div>
</template>

<script>
import RegistrationForm from "../components/Forms/RegistrationForm.vue";
import LoginFrom from "../components/Forms/LoginFrom.vue";

export default {

  components: {
    LoginFrom,
    RegistrationForm
  }

}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4e4e4e;
}

</style>
