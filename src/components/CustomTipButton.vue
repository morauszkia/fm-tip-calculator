<script setup>
import { store } from "../store/store";
import { ref, watch } from "vue";

let customTipValue = ref("");

const setCustomTip = (event) => {
  customTipValue.value = event.target.value;
  store.tip = customTipValue.value;
  store.customTip = true;
};

watch(
  () => store.tip,
  () => {
    if (store.tip === undefined) {
      customTipValue.value = "";
    }
  }
);
</script>

<template>
  <input
    type="text"
    placeholder="Custom"
    @input="setCustomTip"
    @focus="setCustomTip"
    :class="store.customTip ? 'selected' : ''"
    :value="customTipValue"
  />
</template>

<style scoped>
input {
  font: inherit;
  text-align: right;
  padding: 0.25em 0.6em;
  border-radius: var(--radius-sm);
  border: none;
  background-color: var(--light);
  color: var(--font);
}

input::placeholder {
  color: var(--font);
}

input.selected,
input:focus {
  outline: 2px solid var(--primary);
  color: var(--dark);
}
</style>
