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

.output-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

@media screen and (min-width: 58rem) {
  .output {
    padding: 2.5rem;
    flex-basis: 105%;
    justify-content: space-between;
  }

  .output-list {
    gap: 1.6rem;
  }
}
</style>
