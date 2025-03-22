<script setup>
import FormInput from "./FormInput.vue";
import TipSelector from "./TipSelector.vue";
</script>

<template>
  <FormInput id="bill" input-label="Bill" name="bill" icon="icon-dollar.svg" />
  <TipSelector />
  <FormInput
    id="people"
    input-label="Number of People"
    name="people"
    icon="icon-person.svg"
  />
</template>

<style scoped></style>
