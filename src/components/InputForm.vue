<script setup>
import FormInput from "./FormInput.vue";
import TipSelector from "./TipSelector.vue";
import { store } from "../store/store";
</script>

<template>
  <p>Bill: {{ store.bill }}</p>
  <p>People: {{ store.people }}</p>
  <p>Tip: {{ store.tip }}</p>
  <p>Tip / Person: {{ store.tipPerPerson }}</p>
  <p>Total / Person: {{ store.totalPerPerson }}</p>
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
</template>

<style scoped></style>
