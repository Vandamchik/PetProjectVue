<template>
  <form @submit.prevent="loginHandler" class="form-container">
    <base-input
      v-model.trim="formData.email"
      type="email"
      title-label="Email:"
      placeholder="Enter your email"
      :isValid="isValidEmail"
      @blur="validateEmail"
      id="emailLogin"
    />
    <base-input
        v-model.trim="formData.password"
        :type="showPassword ? 'text' : 'password'"
        title-label="Password:"
        placeholder="Password must be safe"
        :isValid="isValidPassword"
        @blur="validatePassword"
        id="passwordRegistration"
    />
    <base-checkbox
        @showPassword="checkboxHandler"
        title-label="Show Password"
    />
    <base-button
      btn-title="Login"
      type="submit"
    />
  </form>
</template>

<script>
import { reactive, ref } from 'vue';

export default {

  setup() {
    const formData = reactive({
      email: '',
      password: '',
    });
    const isValidEmail = reactive({
      status: 'pending',
      message: 'Please enter valid email!'
    });
    const isValidPassword = reactive({
      status: 'pending',
      message: 'Password must contains more than 6 symbols',
    });
    const showPassword = ref(false);

    function loginHandler() {
      console.log("loginForm",formData.email)
      console.log("loginForm",formData.password)
    }

    function checkboxHandler(data) {
      showPassword.value = data
    }

    function validateEmail() {
      if (formData.email.includes('@') && formData.email.length > 0) {
        isValidEmail.status = 'valid';
      } else {
        isValidEmail.status = 'invalid';
      }
    }

    function validatePassword() {
      if (formData.password.length > 6) {
        isValidPassword.status = 'valid';
      } else {
        isValidPassword.status = 'invalid';
      }
    }

    return {
      isValidEmail,
      isValidPassword,
      formData,
      showPassword,
      checkboxHandler,
      validateEmail,
      validatePassword,
      loginHandler
    }
  }
}
</script>

<style lang="scss" scoped>
.form-container {
  margin: 10px 0;
  padding: 20px 0;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: none;
  background-color: #F2F2F2ED;
}
</style>
