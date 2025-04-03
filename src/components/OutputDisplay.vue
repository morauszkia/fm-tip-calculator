<script setup>
import { store } from "../store/store";
import OutputItem from "./OutputItem.vue";
import ResetButton from "./ResetButton.vue";
</script>

<template>
  <section class="output">
    <div class="output-list">
      <OutputItem title="Tip Amount" :amount="store.tipPerPerson" />
      <OutputItem title="Total" :amount="store.totalPerPerson" />
    </div>
    <ResetButton />
  </section>
</template>

<style scoped>
.output {
  background-color: var(--dark);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
