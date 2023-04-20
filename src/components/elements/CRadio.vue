<template>
  <div>
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
.control {
  cursor: pointer;
  padding-top: calc(0.25rem * 2);
  padding-bottom: calc(0.25rem * 2);
  display: flex;
  position: relative;
  line-height: 1.25;

  &--checkbox,
  &--radio {
    .control-box {
      border: 2px solid rgb(33 33 33 / 1);

      svg {
        transform: scale(0);
        width: calc(0.25rem * 3.5);
        height: calc(0.25rem * 3.5);
      }
    }

    .control-input:checked ~ .control-box svg {
      transform: scale(1);
    }
  }
  &--radio,
  &--custom {
    .control-box {
      border-radius: 10em;
    }
  }

  &--custom {
    .control-input:checked ~ .control-box {
      box-shadow: 0 0 0 2px white, 0 0 0 4px black;
    }
  }

  &-input {
    position: absolute;
    opacity: 0;
  }

  &-box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    flex-shrink: 0;
    border-width: 2px;
    overflow: hidden;
    width: calc(0.25rem * 5);
    height: calc(0.25rem * 5);
    margin-right: calc(0.25rem * 3);
    background-color: rgb(255 255 255 / 1);
  }

  &-label {
    min-width: 0;
    align-self: center;
    flex: 1;
  }
}
</style>
