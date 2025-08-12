<script setup>
import { ref } from "vue";
import FormInput from "./FormInput.vue";
import TipSelector from "./TipSelector.vue";
import { store } from "../store/store";

let errors = {
  bill: ref(null),
  people: ref(null),
};

const validateInput = (id) => {
  if (store[id] === 0) errors[id].value = "Can't be zero";
  else errors[id].value = null;
};
</script>

<template>
  <form class="form">
    <FormInput
      id="bill"
      input-label="Bill"
      name="bill"
      icon="icon-dollar.svg"
      v-model="store.bill"
      :error="errors.bill.value"
      @blur="(e) => validateInput('bill')"
    />
    <TipSelector />
    <FormInput
      id="people"
      input-label="Number of People"
      name="people"
      icon="icon-person.svg"
      v-model="store.people"
      :error="errors.people.value"
      @blur="(e) => validateInput('people')"
    />
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0.5rem;
}
</style>
