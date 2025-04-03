<script setup>
import FormInput from "./FormInput.vue";
import TipSelector from "./TipSelector.vue";
import { store } from "../store/store";
import OutputDisplay from "./OutputDisplay.vue";
</script>

<template>
  <form class="form">
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

<style scoped>
.form {
  background-color: #fff;
  width: 100%;
  padding: 2rem;
  border-top-left-radius: var(--radius-lg);
  border-top-right-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
