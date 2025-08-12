<script setup>
import TipButton from "./TipButton.vue";
import CustomTipButton from "./CustomTipButton.vue";

const tipOptions = ["5", "10", "15", "25", "50"];
</script>

<template>
  <fieldset>
    <p>Select Tip &percnt;</p>
    <div class="grid">
      <TipButton v-for="value in tipOptions" :key="value" :value="value" />
      <CustomTipButton />
    </div>
  </fieldset>
</template>

<style scoped>
fieldset {
  border: none;
}

p {
  color: var(--font);
  margin-bottom: 1em;
}

.grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  font-size: var(--input-font-size);
}

@media screen and (min-width: 65rem) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
  }
}
</style>
