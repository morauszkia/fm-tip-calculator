<script setup>
const tipOptions = [5, 10, 15, 25, 50];
</script>

<template>
  <fieldset>
    <template v-for="value in tipOptions" :key="value">
      <input type="radio" name="tip" :value="value" :id="value" />
      <label :for="value">{{ value + "%" }}</label>
    </template>
    <input type="radio" name="tip" :value="custom" id="custom" />
    <label for="custom">Custom</label>
  </fieldset>
</template>

<style scoped></style>
