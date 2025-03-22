<script setup>
import { ref } from "vue";
const tipOptions = ["5", "10", "15", "25", "50"];
const selectedOption = ref("5");
const customTip = ref("Custom");
</script>

<template>
  <p>Selected: {{ selectedOption }}</p>
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
      type="radio"
      name="tip"
      value="custom"
      id="custom"
      v-model="selectedOption"
    />
    <label for="custom">
      <input
        type="text"
        @click="
          () => {
            selectedOption = 'custom';
          }
        "
        :value="customTip"
      />
    </label>
  </fieldset>
</template>

<style scoped></style>
