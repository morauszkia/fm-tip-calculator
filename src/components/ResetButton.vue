<script setup>
import { store } from "../store/store";
</script>

<template>
  <button type="reset" @click="store.reset" :disabled="!store.formIsTouched">
    Reset
  </button>
</template>

<style scoped>
button {
  font: inherit;
  text-transform: uppercase;
  font-size: 1.25rem;
  color: var(--dark);
  background-color: var(--primary);
  padding: 0.45em;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s;
}

button:hover,
button:active {
  background-color: var(--btn-hover);
}

button:active {
  transform: scale(0.98);
}

button:disabled {
  background-color: var(--btn-active);
  cursor: not-allowed;
}
</style>
