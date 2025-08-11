<script setup>
import { store } from "../store/store";
import { ref, watch } from "vue";

const setCustomTip = (event) => {
  customTipValue = event.target.value;
  store.tip = customTipValue;
  store.customTip = true;
};

let customTipValue = ref("");

watch(
  () => store.tip,
  () => {
    if (store.tip === undefined) {
      customTipValue = "";
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
  padding: 0.25em 0.75em;
}
</style>
