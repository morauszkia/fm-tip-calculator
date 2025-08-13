<script setup>
import { getImageUrl } from "../util/util";

const { id, inputLabel, name, icon, error } = defineProps([
  "id",
  "inputLabel",
  "name",
  "icon",
  "error",
]);

const emits = defineEmits(["input"]);

const value = defineModel();
</script>

<template>
  <fieldset>
    <div class="label-container">
      <label :for="id">{{ inputLabel }}</label>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
    <div class="input">
      <img :src="getImageUrl(icon)" aria-hidden="true" />
      <input
        type="number"
        :id="id"
        :name="name"
        v-model="value"
        placeholder="0"
        :class="error ? 'error' : ''"
        @input="$emit('input')"
      />
    </div>
  </fieldset>
</template>

<style scoped>
fieldset {
  border: none;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.label-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

label {
  color: var(--font);
}

.error-message {
  color: var(--error);
}

.input {
  position: relative;
}

.input img {
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 1.25rem;
  transform: translateY(-50%);
}

input {
  width: 100%;
  padding: 0.25em 0.75em;
  background-color: var(--light);
  border-radius: var(--radius-sm);
  text-align: right;
  font-size: var(--input-font-size);
  color: var(--dark);
  border: none;
  cursor: pointer;
}

input:focus {
  outline: 2px solid var(--primary);
}

input.error {
  outline: 2px solid var(--error);
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
