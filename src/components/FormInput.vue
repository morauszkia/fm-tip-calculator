<script setup>
import { getImageUrl } from "../util/util";

const { id, inputLabel, name, icon } = defineProps([
  "id",
  "input-label",
  "name",
  "icon",
]);

const value = defineModel();
</script>

<template>
  <fieldset>
    <div>
      <label :for="id">{{ inputLabel }}</label>
      <p>Can't be zero</p>
    </div>
    <img :src="getImageUrl(icon)" aria-hidden="true" />
    <input
      type="number"
      :id="id"
      :name="name"
      v-model="value"
      placeholder="0"
    />
  </fieldset>
</template>

<style scoped></style>
