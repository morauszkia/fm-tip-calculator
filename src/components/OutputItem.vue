<script setup>
import { computed } from "vue";

const { title, amount } = defineProps(["title", "amount"]);
const displayAmount = computed(() =>
  (isFinite(amount) ? amount : 0).toFixed(2)
);
</script>

<template>
  <div class="output-row">
    <div>
      <p class="output-title">{{ title }}</p>
      <p class="output-person">/ person</p>
    </div>
    <div>
      <p class="output-amount">${{ displayAmount }}</p>
    </div>
  </div>
</template>

<style scoped>
.output-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.output-title {
  color: var(--light);
}

.output-person {
  color: hsl(184, 14%, 56%);
  font-size: 0.8125rem;
}

.output-amount {
  color: var(--primary);
  font-size: 2rem;
}
</style>
