<template>
  <div class="misa-grid-table">
    <table class="misa-table" border="0" cellspacing="0">
      <thead>
        <tr>
          <th class="misa-text-center">
            <BaseCheckbox
              :checked="data.length == listItemSelected.length"
              @click="handleToggleAll"
            />
          </th>
          <th
            :style="{
              minWidth: field?.width,
              maxWidth: field?.width,
              borderRight: index == fieldRender.length - 1 ? 'none' : '',
            }"
            v-for="(field, index) in fieldRender"
            :key="index"
            :class="field['textPositionClass']"
          >
            {{ field["fieldDisplay"] }}
          </th>
          <th class="misa-text-center">CHỨC NĂNG</th>
        </tr>
      </thead>

      <div class="misa-table-empty" v-if="data.length == 0">Trống</div>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td class="misa-text-center">
            <BaseCheckbox
              @click="handleSelectItem(row[idRow])"
              :checked="listItemSelected.includes(row[idRow])"
            />
          </td>

          <td
            @dblclick="showFormEdit(row[idRow])"
            :style="{
              minWidth: field?.width,
              maxWidth: field?.width,
              borderRight: index == fieldRender.length - 1 ? 'none' : '',
            }"
            v-for="(field, index) in fieldRender"
            :class="field['textPositionClass']"
            :key="index"
          >
            {{
              !row[field["fieldName"]]
                ? ""
                : field["type"] == "date"
                ? CommonJS.formatDate(row[field["fieldName"]])
                : row[field["fieldName"]]
            }}
          </td>

          <td class="misa-text-center">
            <div class="misa-table-context-wrapper">
              <div @click="showFormEdit(row[idRow])">Sửa</div>
              <div
                @click="(e) => showMenuContext(e, row)"
                class="misa-table-icon-menu-context misa-icon"
              ></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <BaseMenuContext
      :deleteMethod="handleDeleteItem"
      :position="positionMenu"
      ref="menuContext"
      v-show="isShowMenuContext"
      :duplicateMethod="handleDuplicateItem"
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
