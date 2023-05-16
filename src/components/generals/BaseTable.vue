<template>
  <div class="grid-table">
    <table class="table" border="0" cellspacing="0">
      <thead>
        <tr>
          <th
            :style="{
              minWidth: field?.width,
              maxWidth: field?.width,
              borderRight: index == props.fieldRender.length - 1 ? 'none' : '',
            }"
            v-for="(field, index) in props.fieldRender"
            :key="index"
            :class="field['textPositionClass']"
          >
            {{ field["fieldDisplay"] }}
          </th>
          <th class="text-center">Method</th>
        </tr>
      </thead>

      <div class="table-empty" v-if="props.data.length == 0">Drum</div>
      <tbody>
        <tr v-for="(row, index) in props.data" :key="index">
          <td
            @dblclick="showFormEdit(row[idRow])"
            :style="{
              minWidth: field?.width,
              maxWidth: field?.width,
              borderRight: index == props.fieldRender.length - 1 ? 'none' : '',
            }"
            v-for="(field, index) in props.fieldRender"
            :class="field['textPositionClass']"
            :key="index"
          >
            {{
              !row[field["fieldName"]]
                ? ""
                : field["type"] == "date"
                ? formatDate(row[field["fieldName"]])
                : row[field["fieldName"]]
            }}
          </td>

          <td class="text-center">
            <div class="table-context-wrapper">
              <div @click="showFormEdit(row[idRow])">Edit</div>
              <div @click="handleDeleteItem(row[idRow])">Delete</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
import useCommon from "@/composables/useCommon";

const props = defineProps({
  data: {
    type: Array,
  },
  fieldRender: {
    type: Array,
  },
  idRow: {
    type: String,
    default: "",
  },
  listItemSelected: {
    type: Array,
  },
});
const { formatDate } = useCommon();
const emits = defineEmits([
  "select-row",
  "toggle-all",
  "show-form-edit",
  "delete-row",
]);

const handleDeleteItem = (id) => {
  emits("delete-row", id);
};

const showFormEdit = (id) => {
  emits("show-form-edit", id);
};
</script>

<style lang="scss" scoped>
.grid-table {
  width: 100%;
  margin: auto;
  position: relative;
  flex: 1;
  overflow: unset;
  box-sizing: border-box;
  background-color: #fff;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  height: calc(100% - 66px - 56px - 16px);
}
.table {
  border-collapse: separate;
  border: none;
  width: 100%;
  display: block;
  overflow: auto;
  height: 100%;
}

.table::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  margin-top: 40px;
}

.table::-webkit-scrollbar-thumb {
  background-color: #dbdbdbda;
  /* border-radius: 2px; */
}

.table::-webkit-scrollbar-thumb:hover {
  background-color: #8d8d8d;
}

.table::-webkit-scrollbar-track {
  background-color: #f5f5f5;
  margin-top: 34px;
  border-radius: 2px;
}

.table thead {
  position: sticky;
  top: 0px;
  z-index: 3;
}

.table tr td,
.table tr th {
  border-bottom: 1px solid #babec5;
  box-sizing: border-box;
}

.table td,
.table th {
  padding: 0px 10px 0px 10px;
  min-height: 34px;
  max-height: 34px;
  height: 34px;
  border-right: 1px dotted #babec5;
  background-color: #fff;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  min-width: 120px;
  white-space: nowrap;
}

.table td:hover {
  text-overflow: clip;
  white-space: wrap;
  word-break: break-all;
}

.table th {
  border-right-style: solid;
}

.table td {
  height: 44px;
  min-height: 44px;
  max-height: 44px;
}

.table-icon-menu-context {
  background-position: -900px -365px;
  width: 8px;
  height: 5px;
  margin-left: 16px;
  cursor: pointer;
}

.table thead th {
  white-space: nowrap;
  background-color: #e5e8ec;
  font-weight: bold;
}

.table td:last-child,
.table th:last-child {
  border-right: none;
  border-left: 1px dotted #babec5;
  min-width: 120px;
  max-width: 120px;
  width: 120px;
  position: sticky;
  right: 0;
}

.table th:last-child {
  border-left-style: solid;
}

.table td:first-child,
.table th:first-child {
  min-width: 40px;
  max-width: 40px;
  width: 40px;
  position: sticky;
  left: 0px;
  z-index: 2;
  border-left: none;
}

.table td:nth-child(2),
.table th:nth-child(2) {
  min-width: 120px;
  max-width: 120px;
  width: 183px;
  position: sticky;
  left: 40px;
  z-index: 2;
}

.table tbody tr:hover td {
  background-color: #f2f9ff !important;
}

.table-icon-menu-context {
  background-position: -900px -365px;
  width: 8px;
  height: 5px;
  margin-left: 16px;
  cursor: pointer;
}

.table-context-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: rgb(2, 94, 152);
  font-weight: 500;
  position: relative;
}

.table-context-wrapper > div {
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  line-height: 13px;
}

.table-context-wrapper > div:active {
  border: 1px solid;
}

.table-empty {
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
}
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
</style>
