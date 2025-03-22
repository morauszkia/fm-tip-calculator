<script setup>
import { computed, ref, watch } from "vue";
import { store } from "../store/store";
const tipOptions = ["5", "10", "15", "25", "50"];
const selectedOption = ref("");
const customTip = ref("");
const tipPcent = computed(() => {
  if (tipOptions.includes(selectedOption.value)) return selectedOption.value;
  return customTip;
});
watch(tipPcent, () => (store.tip = tipPcent));
</script>

<template>
  <fieldset>
    <template v-for="value in tipOptions" :key="value">
      <input
        type="radio"
        name="tip"
        :value="value"
        :id="value"
        v-model="selectedOption"
      />
      <label :for="value">{{ value + "%" }}</label>
    </template>
    <input
      type="text"
      @click="
        () => {
          selectedOption = 'custom';
        }
      "
      placeholder="Custom"
      v-model="customTip"
    />
  </fieldset>
</template>

<style scoped></style>
