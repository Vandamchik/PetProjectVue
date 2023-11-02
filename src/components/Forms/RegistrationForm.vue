<template>
  <form @submit.prevent="registrationHandler" class="form-container">
    <base-input
      v-model.trim="email"
      :isValid="isValidEmail"
      type="email"
      title-label="Email:"
      placeholder="Enter your email"
      id="emailRegistration"
      notValidMessage="Please wright correct email address"
    />
    <base-input
      v-model.trim="password"
      :type="showPassword ? 'text' : 'password'"
      :isValid="isValidPassword"
      title-label="Password:"
      placeholder="Enter safe password"
      notValidMessage="Password must be have more than 6 symbols"
      id="passwordRegistration"
    />
    <base-checkbox
      @showPassword="checkboxHandler"
      title-label="Show Password"
    />
    <base-input
      v-model.trim="name"
      :isValid="isValidName"
      title-label="Name:"
      placeholder="Enter your name"
      notValidMessage="Name must be exist"
      id="nameRegistration"
    />
    <base-button
      btn-title="Registration"
      type="submit"
    />
  </form>
</template>

<script>
import { ref } from 'vue';
import { isPassValid, isEmail, isNotEmpty } from '../../utils/validation/formValidation.js';
import useInputHook from "../../hooks/useInputHook.js";

export default {

  setup() {
    const {
      inputValue: email,
      isInputValid: isValidEmail
    } = useInputHook('', isEmail);
    const {
      inputValue: password,
      isInputValid: isValidPassword
    } = useInputHook('', isPassValid);
    const {
      inputValue: name,
      isInputValid: isValidName
    } = useInputHook('', isNotEmpty);
    const showPassword = ref(false);

    function registrationHandler() {
      console.group([
        'Register from data',email.value, password.value,name.value
      ]);
    }

    function checkboxHandler(data) {
      showPassword.value = data
    }

    return {
      email,
      password,
      name,
      isValidEmail,
      isValidPassword,
      isValidName,
      showPassword,
      checkboxHandler,
      registrationHandler
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
