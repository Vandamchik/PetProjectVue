<template>
  <div class="btn-container">
    <button
        class="submit-btn"
        v-bind="$attrs"
        >
      {{ btnTitle }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  btnTitle: {
    type: String,
    default: 'Submit'
  }
})

</script>

<style lang="scss" scoped>
.btn-container {
  margin: 10px 0;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
}

.submit-btn {
  height: 100%;
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  color: #4fffdf;
  background-color: #4e4e4e;
}

.submit-btn:hover {
  color: #4e4e4e;
  background-color: #4fffdf;
  border: 1px solid #4e4e4e;
}

</style>
