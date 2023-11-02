<template>
  <form @submit.prevent="loginHandler" class="form-container">
    <base-input
      v-model.trim="email"
      :isValid="isValidEmail"
      type="email"
      title-label="Email:"
      placeholder="Enter your email"
      id="emailLogin"
      notValidMessage="Please wright correct email address"
    />
    <base-input
        v-model.trim="password"
        :isValid="isValidPassword"
        :type="showPassword ? 'text' : 'password'"
        title-label="Password:"
        placeholder="Password must be safe"
        id="passwordRegistration"
        notValidMessage="Password must be have more than 6 symbols"
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
import { ref } from 'vue';
import { isPassValid, isEmail } from '../../utils/validation/formValidation.js';
import useInputHook from "../../hooks/useInputHook.js";

export default {

  setup() {
    const {
      inputValue: email,
      isInputValid: isValidEmail ,
    } = useInputHook('', isEmail);
    const {
      inputValue: password,
      isInputValid: isValidPassword
    } = useInputHook('', isPassValid)
    const showPassword = ref(false);

    function loginHandler() {
      console.group([
        'Login from data',email.value, password.value
      ]);
    }

    function checkboxHandler(data) {
      showPassword.value = data
    }


    return {
      email,
      password,
      showPassword,
      checkboxHandler,
      isValidEmail,
      isValidPassword,
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
