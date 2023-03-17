<template>
  <div :class="['container', style]">
    <div :class="required && 'field-label-require'" class="field-label">
      {{ label }}
    </div>
    <div
      class="aselect"
      tabindex="100"
      :class="[borderBackgroundStyle]"
      @focus="onFocus"
      @focusin="onFocusIn"
      @focusout="onFocusOut"
    >
      <div class="selector" :class="paddingStyle" @click="toggle()">
        <div class="label">
          <span :class="!props.modelValue && 'placeholder-text'">{{
            find(props.options, ({ value }) => props.modelValue === value)?.[
              "name"
            ] || props.placeholder
          }}</span>
        </div>
        <div
          v-if="!!icon"
          :class="'icon-' + props.iconName"
          class="icon-left-style"
        ></div>
        <div class="icon-chevron-down"></div>

        <div v-if="visible">
          <ul>
            <li @click="emits('update:modelValue', null)"></li>
            <li
              v-for="item in props.options"
              :key="item.value"
              :class="props.modelValue == item.value && 'selected-item'"
              @click="emits('update:modelValue', item.value)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="error-container">
      <span v-if="!!props.errorMessage" class="error">{{
        props.errorMessage
      }}</span>
    </div>
  </div>
</template>
<script setup>
import lodash from "lodash";
import { computed, defineProps, defineEmits, ref } from "vue";
const { find } = lodash;
const props = defineProps({
  required: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
  icon: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "",
  },
  errorMessage: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: String,
    default: "",
  },
  iconName: {
    type: String,
    default: "",
  },
  // disable
  status: {
    type: Boolean,
    default: false,
  },
  fluid: {
    type: Boolean,
    default: false,
  },
  fit: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits([
  "update:modelValue",
  "focus",
  "focusIn",
  "focusOut",
  "search",
]);

const isFocusing = ref(false);
const onFocus = () => {
  emits("focus");
};
const onFocusIn = () => {
  emits("focusIn");
  isFocusing.value = true;
};
const onFocusOut = () => {
  emits("focusOut");
  isFocusing.value = false;
  visible.value = false;
};

const paddingStyle = computed(() => {
  if (props.icon) {
    return "padding-icon";
  } else {
    return "padding-normal";
  }
});
const borderBackgroundStyle = computed(() => {
  if (props.status) {
    return "background-disable";
  }
  if (props.errorMessage) {
    return "background-error";
  }
  if (isFocusing.value) {
    return "background-focus";
  } else {
    return "background-normal";
  }
});

const style = computed(() => {
  if (props.fluid) {
    return "width-full";
  }
  if (props.fit) {
    return "width-fit ";
  }
  return "width-default";
});

let visible = ref(false);

const toggle = () => {
  visible.value = !visible.value;
};
</script>
<style lang="scss" scoped>
.aselect {
  width: 100%;
  height: 48px;
  margin-top: 11px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
  outline: none;
  @media not screen and (min-width: 1280px) {
    height: fit-content;
  }
  .selector {
    border-radius: 6px;
    position: relative;
    .label {
      text-align: start;
      display: block;
      padding: 12px 0;
      color: black;
      span {
        font-size: 16px;
      }
      @media not screen and (min-width: 1280px) {
        span {
          font-size: 14px;
        }
      }
    }
    .icon-chevron-down {
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 11px;
      flex-shrink: 0;
    }
  }
  ul {
    left: 0;
    width: 100%;
    border: 1px solid #b6b6b6;
    list-style-type: none;
    padding: 0;
    margin-top: 5px;
    font-size: 16px;
    position: absolute;
    background: white;
    z-index: 9999;
    max-height: 300px;
    overflow-y: scroll;
    left: -2px;
    width: calc(100% + 2px);
    @media not screen and (min-width: 1280px) {
      font-size: 14px;
    }
  }
  li {
    padding: 12px;
    color: black;
    font-size: 16px;
    line-height: 100%;
    font-weight: 400;
    &:hover {
      color: black;
      background: green;
      cursor: pointer;
    }
    @media not screen and (min-width: 1280px) {
      font-size: 14px;
    }
  }
  .hidden {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }
}

.selected-item {
  background: green;
}

.placeholder-text {
  color: #b6b6b6;
  font-size: 16px;
  line-height: 100%;
  font-weight: 400;
  @media not screen and (min-width: 1280px) {
    font-size: 14px;
  }
}

.container {
  max-width: 800px;
  width: 90%;

  @media not screen and (min-width: 1280px) {
    width: 90%;
    max-width: 90%;
  }
}
.icon-left-style {
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 13px;
}
.width-full {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}
.width-fit {
  width: fit-content;
}
.width-default {
  width: 335px;
}
.background-disable {
  pointer-events: none;
  background: rgb(132, 229, 132);
  border-color: #dee1dc;
}
.background-error {
  background: #f9e6e6;
  border: 2px solid red;
}
.background-focus {
  background: white;
  border: 2px solid #0c7159;
}
.background-normal {
  background: white;
  border: 1px solid #dee1dc;
  padding: 1px;
}
.padding-icon {
  padding-left: 42px;
}
.padding-normal {
  padding-left: 12px;
}

.break-words {
  overflow-wrap: break-word;
}

.error-container {
  word-break: normal;
}

.error {
  color: red;
  font-size: 14px;
  font-weight: bold;
}
</style>
