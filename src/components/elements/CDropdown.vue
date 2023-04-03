<template>
  <div
    :style="{ width: width }"
    id="msp-dropdown-container"
    :class="{ 'msp-border-field-error': error }"
  >
    <DxSelectBox
      :placeholder="placeholder"
      :dataSource="data"
      dropDownButtonTemplate="buttonDropDown"
      itemTemplate="itemTemplate"
      :drop-down-options="{ overflow: 'unset' }"
      :display-expr="fieldDisplay"
      :value-expr="fieldName"
      :value="value"
      :onItemClick="handleClickItem"
      :onKeyDown="handleKeyDown"
      labelMode="hidden"
      :opened="opened"
      :tabIndex="searchEnabled && tabIndex"
      :searchEnabled="searchEnabled"
      :onFocusIn="handleFocus"
      :onFocusOut="handleBlur"
      noDataText="Không có dữ liệu"
      :onInput="searchEnabled && ((e) => handleInput(e))"
    >
      <template #buttonDropDown>
        <div class="msp-icon-dropdown msp-icon-20"></div>
      </template>

      <template #itemTemplate="{ data }">
        <div class="msp-dropdown-item-custom-dx">
          <div
            class="msp-dropdown-item-text text-ellipsis flex align-items-center flex-between"
          >
            <div class="h-full text-ellipsis">{{ data[fieldDisplay] }}</div>
            <slot
              classProp="msp-dropdown-item-icon"
              :value="value"
              name="item-icon"
            ></slot>
          </div>
          <span v-if="showTooltip" class="msp-dropdown-item-custom-tooltip">{{
            data[fieldDisplay]
          }}</span>
        </div>
      </template>
    </DxSelectBox>
  </div>
</template>
<script setup>
import DxSelectBox from "devextreme-vue/select-box";
import { defineProps, ref, onMounted, defineEmits, watch } from "vue";

let value = ref({});
let currentIndex = ref(0);
let opened = ref(false);
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  //placeholder của dropdown
  placeholder: {
    type: String,
    default: "-Chọn-",
  },
  //độ dài
  width: String,
  //Xác nhận có show tooltip không
  showTooltip: {
    type: Boolean,
    default: true,
  },
  //Field sẽ lấy giá trị
  fieldName: {
    type: String,
    required: true,
  },
  //Field sẽ hiển thị
  fieldDisplay: {
    type: String,
    required: true,
  },
  //Giá trị khởi tạo
  valueInit: Object,
  // Thông báo lỗi
  error: String,
  //tabindex
  tabIndex: Number,
  // Cho phép search không
  searchEnabled: {
    type: Boolean,
    default: true,
  },
  //Cho phép arrow change value không
  allowArrowChangeValue: {
    type: Boolean,
    default: true,
  },
});
onMounted(() => {
  if (props.valueInit != null) {
    value = props.valueInit;
  }
});

const emits = defineEmits(["changeValue", "blurDropdown"]);

const handleClickItem = (e) => {
  const { itemIndex, itemData } = e;
  currentIndex.value = itemIndex;
  emits("changeValue", itemData[props.fieldName]);
  emits("changeName", itemData[props.fieldDisplay]);
};

const handleKeyDown = (e) => {
  const key = e.event.key;
  if (key == "Enter") opened.value = true;
  if (key == "Escape") opened.value = false;
  if (key == "ArrowDown") {
    if (currentIndex.value == props.data.length - 1) currentIndex.value = 0;
    else currentIndex.value++;
  }
  if (key == "ArrowUp") {
    if (currentIndex.value == 0) currentIndex.value = props.data.length - 1;
    else currentIndex.value--;
  }
  if (currentIndex && props.allowArrowChangeValue) {
    emits("changeValue", props.data[currentIndex.value][props.fieldName]);
  }
};

const handleBlur = () => {
  opened.value = false;
  emits("blurDropdown");
};
const handleFocus = () => {
  opened.value = true;
};
const handleInput = (e) => {
  if (e.event.target.value == "") emits("changeValue", "");
};
watch(
  () => props.valueInit,
  (newValue) => {
    if (newValue) {
      value = newValue;
    }
  }
);
</script>
<style lang="scss" scoped>
#msp-dropdown-container {
  :deep(.dx-texteditor-buttons-container) {
    display: flex;
    align-items: center;
  }
}
</style>
