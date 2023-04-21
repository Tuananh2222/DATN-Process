<template>
  <div class="label">
    <input
      type="radio"
      :value="props.value"
      @click="handleChangeValue"
      v-model="checked"
      :name="name"
    />
    <label>{{ label }}</label>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
const props = defineProps({
  //giá trị input
  value: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const checked = ref(false);

const emit = defineEmits(["update:modelValue"]);
const handleChangeValue = (e) => {
  emit("update:modelValue", e.target.value);
};
</script>

<style lang="scss" scoped>
.label {
  display: flex;
  margin-top: 10px;
  cursor: pointer;
}
input[type="radio"] {
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* For iOS < 15 */
  background-color: var(--form-background);
  /* Not removed via appearance */
  margin: 0;

  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 50%;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;
}

input[type="radio"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em rebeccapurple;
  /* Windows High Contrast Mode */
  background-color: CanvasText;
}

input[type="radio"]:checked::before {
  transform: scale(1);
}

input[type="radio"]:focus {
  outline: max(2px, 0.15em) solid currentColor;
  outline-offset: max(2px, 0.15em);
}
label {
  margin-left: 5px;
}
</style>
