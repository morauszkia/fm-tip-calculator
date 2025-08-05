<script setup>
import { defineProps, defineEmits } from "vue";

const { value, modelValue } = defineProps({
  value: String,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

function updateValue() {
  emit("update:modelValue", value);
}
</script>

<template>
  <input
    type="radio"
    name="tip"
    :id="value"
    :value="value"
    :checked="modelValue === value"
    @change="updateValue"
  />
  <label :for="value">{{ value + "%" }}</label>
</template>
