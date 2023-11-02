import { computed, ref, watch } from 'vue';

export default function useInputHook(value = '', validator) {
    const inputValue = ref(value);
    const inputValid = ref(true);

    const isInputValid = computed(() => {
        return inputValid.value === true
    });

    watch(inputValue, (newValue, _) => {
        inputValid.value = validator(newValue);
    })

    return {
        inputValue,
        inputValid,
        isInputValid
    }
}
