<script setup>
import { computed, ref, watch } from "vue";
import { store } from "../store/store";
import TipButton from "./TipButton.vue";

const tipOptions = ["5", "10", "15", "25", "50"];
const selectedOption = ref("");
const customTip = ref("");

const tipPcent = computed(() => {
  if (tipOptions.includes(selectedOption.value)) return selectedOption.value;
  return customTip.value;
});

watch(tipPcent, () => (store.tip = tipPcent));
</script>

<template>
  <fieldset>
    <TipButton
      v-for="value in tipOptions"
      :key="value"
      :value="value"
      v-model="selectedOption"
    />
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
