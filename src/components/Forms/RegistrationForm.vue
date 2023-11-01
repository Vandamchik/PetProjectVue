<template>
  <form @submit.prevent="registrationHandler" class="form-container">
    <base-input
      v-model.trim="formData.email"
      type="email"
      title-label="Email:"
      placeholder="Enter your email"
      id="emailRegistration"
      :isValid="isValidEmail"
      @blur="validateEmail"
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
    <base-input
      v-model.trim="formData.name"
      title-label="Name:"
      placeholder="Your name"
      :isValid="isValidName"
      @blur="validateName"
      id="nameRegistration"
    />
    <base-button
      btn-title="Registration"
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
      name: ''
    });
    const isValidEmail = reactive({
      status: 'pending',
      message: 'Please enter valid email!'
    });
    const isValidPassword = reactive({
      status: 'pending',
      message: 'Password must contains more than 6 symbols',
    });
    const isValidName = reactive({
      status: 'pending',
      message: 'Name must be exist'
    });
    const showPassword = ref(false);


    function registrationHandler() {
      console.log(formData.email)
      console.log(formData.password)
      console.log(formData.name)
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

    function validateName() {
      if (formData.name.length > 0) {
        isValidName.status = 'valid';
      } else  {
        isValidName.status = 'invalid';
      }
    }

    return {
      formData,
      isValidEmail,
      isValidPassword,
      isValidName,
      showPassword,
      checkboxHandler,
      validateName,
      validatePassword,
      validateEmail,
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
