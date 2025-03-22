<script setup>
import { computed, ref } from "vue";
const tipOptions = ["5", "10", "15", "25", "50"];
const selectedOption = ref("5");
const customTip = ref("");
const tipPcent = computed(() => {
  if (tipOptions.includes(selectedOption.value)) return selectedOption.value;
  return customTip;
});
</script>

<template>
  <p>Selected: {{ selectedOption }}</p>
  <p>Tip value: {{ tipPcent }}</p>
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
