<script setup>
import { ref } from "vue";
import FormInput from "./FormInput.vue";
import TipSelector from "./TipSelector.vue";
import { store } from "../store/store";
import vueDebounce from "vue-debounce";

let errors = {
  bill: ref(null),
  people: ref(null),
};

const validateInput = (id) => {
  if (store[id] === 0) errors[id].value = "Can't be zero";
  else if (!store[id]) errors[id].value = "Can't be empty";
  else errors[id].value = null;
};

const vDebounce = vueDebounce();
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
      v-debounce:300ms="() => validateInput('bill')"
      :debounce-events="'input'"
    />
    <TipSelector />
    <FormInput
      id="people"
      input-label="Number of People"
      name="people"
      icon="icon-person.svg"
      v-model="store.people"
      :error="errors.people.value"
      v-debounce:600ms="() => validateInput('people')"
      :debounce-events="'input'"
    />
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0.5rem;
  flex-basis: 100%;
}

@media screen and (min-width: 58rem) {
  .form {
    gap: 2.5rem;
  }
}
</style>
