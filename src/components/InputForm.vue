<script setup>
import FormInput from "./FormInput.vue";
import TipSelector from "./TipSelector.vue";
import { store } from "../store/store";
import OutputDisplay from "./OutputDisplay.vue";
</script>

<template>
  <form>
    <FormInput
      id="bill"
      input-label="Bill"
      name="bill"
      icon="icon-dollar.svg"
      v-model="store.bill"
    />
    <TipSelector />
    <FormInput
      id="people"
      input-label="Number of People"
      name="people"
      icon="icon-person.svg"
      v-model="store.people"
    />
    <OutputDisplay />
  </form>
</template>

<style scoped></style>
