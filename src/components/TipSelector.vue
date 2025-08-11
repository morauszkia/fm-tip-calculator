<script setup>
import TipButton from "./TipButton.vue";
import CustomTipButton from "./CustomTipButton.vue";

const tipOptions = ["5", "10", "15", "25", "50"];
</script>

<template>
  <fieldset>
    <TipButton v-for="value in tipOptions" :key="value" :value="value" />
    <CustomTipButton />
  </fieldset>
</template>

<style scoped>
fieldset {
  width: 100%;
  border: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  font-size: var(--input-font-size);
}
</style>
