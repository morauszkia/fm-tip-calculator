<script setup>
// import { defineProps, defineEmits } from "vue";
import { store } from "../store/store";

const { value } = defineProps({
  value: String,
});

function selectTip() {
  store.tip = value;
  store.customTip = false;
}
</script>

<template>
  <button
    type="button"
    :class="store.tip === value ? 'selected' : ''"
    @click="selectTip"
  >
    {{ value }}%
  </button>
</template>

<style scoped>
button {
  font: inherit;
  cursor: pointer;
  background-color: var(--dark);
  color: #fff;
  border: none;
  border-radius: var(--radius-sm);
  padding: 0.25em 0.75em;
  transition: all 0.3s ease-in;
}

button:hover {
  background-color: var(--btn-hover);
  color: var(--dark);
}

button.selected {
  background-color: var(--primary);
  color: var(--dark);
}
</style>
