<script setup>
import InputForm from "./InputForm.vue";
import OutputDisplay from "./OutputDisplay.vue";
</script>

<template>
  <div class="container">
    <InputForm />
    <OutputDisplay />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  background-color: #fff;
  padding: 2rem 1.5rem;
  border-top-left-radius: var(--radius-lg);
  border-top-right-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media screen and (min-width: 44rem) {
  .container {
    max-width: 90%;
    border-radius: var(--radius-lg);
  }
}

@media screen and (min-width: 58rem) {
  .container {
    max-width: min(90%, 57.5rem);
    flex-direction: row;
    gap: 3rem;
  }
}
</style>
