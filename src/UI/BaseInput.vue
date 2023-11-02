<template>
  <div class="input-wrapper">
    <label v-if="titleLabel" class="input-label" :for="id">{{ titleLabel }}</label>
    <input
      class="main-input"
      :id="id"
      :name="id"
      :class="{ invalid: !isValid }"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
    <p
        v-if="!isValid"
        class="input-p"
    >{{ notValidMessage }}</p>
  </div>
</template>

<script setup>
defineProps({
  titleLabel: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  type: {
    required: false,
    type: String
  },
  isValid: {
    required: false,
    type: Boolean,
  },
  notValidMessage: {
    required: false,
    type: String,
  }
})
</script>

<style lang="scss" scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 110px;
}

.input-label {
  font-size: 26px;
  color: #4e4e4e;
}

.main-input {
  margin: 10px 0;
  width: 350px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #4e4e4e;
  padding-left: 10px;
  outline: none;
}

.main-input.invalid {
  border: 2px solid #e72929;
}

.input-p {
  color: #e72929;
}
</style>
