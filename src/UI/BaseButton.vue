<template>
  <div class="btn-container">
    <button
      class="btn-base"
      type="button"
      v-bind="$attrs"
      @click="$emit('btnClick', btnValue)"
    >
      {{ btnTitle }}
    </button>
  </div>
</template>

<script setup>

defineProps({
  btnTitle: {
    type: String,
    default: 'Press'
  },
  btnValue: {
    type: String,
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

.btn-base {
  height: 100%;
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  color: #4e4e4e;
  background-color:  #4fffdf;
}

.btn-base:hover {
  color: #4fffdf;
  background-color:  #4e4e4e;
  border: 2px solid #4fffdf;
}

</style>
