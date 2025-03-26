<script setup>
import { store } from "../store/store";
import OutputItem from "./OutputItem.vue";
import ResetButton from "./ResetButton.vue";
</script>

<template>
  <OutputItem title="Tip Amount" :amount="store.tipPerPerson" />
  <OutputItem title="Total" :amount="store.totalPerPerson" />
  <ResetButton />
</template>

<style scoped></style>
