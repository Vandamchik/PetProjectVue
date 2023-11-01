<template>
  <form @submit.prevent="registrationHandler" class="form-container">
      <base-input
        v-model.trim="formData.email"
        type="email"
        title-label="Email:"
        placeholder="Enter your email"
        :isValid="isValidEmail"
        @blur="validateEmail"
      />
      <base-input
        v-model.trim="formData.password"
        type="password"
        title-label="Password:"
        placeholder="Password must be safe"
        :isValid="isValidPassword"
        @blur="validatePassword"
      />
      <base-input
        v-model.trim="formData.name"
        title-label="Name:"
        placeholder="Your name"
        :isValid="isValidName"
        @blur="validateName"
      />
    <base-button
      btn-title="Registration"
      type="submit"
    />
  </form>
</template>

<script setup>
import { reactive} from 'vue';
import BaseInput from "../../UI/BaseInput.vue";
import BaseButton from "../../UI/SubmitButton.vue";


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

function registrationHandler() {
  console.log(formData.email)
  console.log(formData.password)
  console.log(formData.name)
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
