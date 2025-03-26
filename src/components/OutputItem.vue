<script setup>
import { computed } from "vue";

const { title, amount } = defineProps(["title", "amount"]);
const displayAmount = computed(() =>
  (isFinite(amount) ? amount : 0).toFixed(2)
);
</script>

<template>
  <div>
    <div>
      <p>{{ title }}</p>
      <p>/ person</p>
    </div>
    <div>
      <p>${{ displayAmount }}</p>
    </div>
  </div>
</template>

<style scoped></style>
