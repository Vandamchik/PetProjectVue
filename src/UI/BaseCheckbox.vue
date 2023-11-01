<template>
  <div class="checkbox-wrapper">
    <label class="label-checkbox" v-if="titleLabel" >{{ titleLabel }}</label>
    <input
      class="base-checkbox"
      type="checkbox"
      @change="$emit('showPassword', $event.target.checked)"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup>
defineProps({
  titleLabel: {
    type: String,
    default: ''
  },
})

</script>

<style lang="scss" scoped>

.checkbox-wrapper {
  display: flex;
  align-items: center;
  width: 400px;
  height: 50px;
}

.label-checkbox {
  font-size: 26px;
  color: #4e4e4e;
}

.base-checkbox {
  margin: 0 0 0 20px;
  width: 40px;
  height: 30px;
}

</style>
