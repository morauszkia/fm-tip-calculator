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
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  padding: 2rem 1.5rem;
  border-top-left-radius: var(--radius-lg);
  border-top-right-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
