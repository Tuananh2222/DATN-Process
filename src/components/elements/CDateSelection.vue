<template>
  <div class="container">
    <div class="date-pick" @click="toggleCalendar">
      <div class="icon-calendar"></div>
      <span class="span-date">{{ formattedDate }} </span>
    </div>
    <div v-if="isOpenCalendar" class="popup-calendar">
      <div class="calendar">
        <div class="header-calendar">
          <span class="title-header">Date Picker</span>
          <div class="icon-close" @click="handleCloseCalendar"></div>
        </div>
        <div class="content-calendar">
          <v-date-picker
            v-model="state.date"
            :attributes="attrs"
            locale="en"
            mode="range"
            :select-attribute="selectAttribute"
          >
          </v-date-picker>
          <!-- :disabled-dates="props.dataDisable" -->
          <div class="content">
            <div class="line-border"></div>
            <div class="confirm">
              <div class="select-date-calender">
                <span>{{ formattedDate }}</span>
              </div>
              <CButton
                :class-name="'button-primary button-square button-block'"
                @handle-button="handleClickConfirm"
                :label="'Select this date'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import dayjs from "dayjs";
import { ref, reactive, defineEmits, computed, defineProps, watch } from "vue";
import CButton from "./CButton.vue";
const props = defineProps({
  dataDisable: {
    type: Array,
  },
});
const state = reactive({
  date: Date.now(),
  titleDate: "",
});
const attrs = ref([
  {
    highlight: {
      contentStyle: {
        backgroundColor: "#B6B6B6",
        color: "white",
        width: "44px",
        borderRadius: "4px",
        height: "44px",
        marginRight: "4px",
        marginBottom: "4px",
        pointerEvents: "none",
        zIndex: 9999,
      },
    },
    dates: props.dataDisable,
  },
]);

watch(
  () => props.dataDisable,
  (newValue) => {
    attrs.value = [
      {
        highlight: {
          contentStyle: {
            backgroundColor: "#B6B6B6",
            color: "white",
            width: "44px",
            borderRadius: "4px",
            height: "44px",
            marginRight: "4px",
            marginBottom: "4px",
            pointerEvents: "none",
            zIndex: 9999,
          },
        },
        dates: newValue,
      },
    ];
  }
);

const selectAttribute = {
  highlight: {
    contentStyle: {
      color: "white",
      backgroundColor: "#0C7159",
      borderRadius: "4px",
      width: "44px",
      height: "44px",
      marginBottom: "4px",
      marginRight: "4px",
      pointerEvents: "none",
    },
  },
};
const emits = defineEmits(["clickConfirm"]);

// const endDate = state.activeDay - 1;

let isOpenCalendar = ref(false);
const toggleCalendar = () => {
  isOpenCalendar.value = !isOpenCalendar.value;
};

const handleCloseCalendar = () => {
  isOpenCalendar.value = false;
};

const handleClickConfirm = () => {
  isOpenCalendar.value = false;
  emits("clickConfirm", state.date);
};
const formattedDate = computed(() => {
  return dayjs(state.date).format("MM/DD");
});
</script>
<style lang="scss" scoped>
:deep(.vc-header) {
  margin-top: 15px;
}
:deep(.vc-header.vc-title) {
  font-weight: 700;
  color: #000;
  font-size: 21px;
}
:deep(.vc-title:hover) {
  opacity: 1;
}
:deep(.vc-arrow) {
  background-color: white;
  width: 32px;
  height: 32px;
  border: 1px solid green;
  border-radius: 50%;
}
:deep(.vc-bordered) {
  border: none;
}
:deep(.vc-arrow svg) {
  width: 20px;
  height: 20px;
  color: green;
}
:deep(.vc-pane-container) {
  height: fit-content;
}
:deep(.vc-container) {
  width: 100%;
}
:deep(.vc-arrow.is-disabled) {
  background-color: transparent;
  color: transparent;
  pointer-events: none;
  border: none;
}
:deep(.vc-arrow.is-disabled svg) {
  background-color: transparent;
  color: transparent;
  pointer-events: none;
}
:deep(.vc-arrows-container) {
  padding: 46px 0px 0px 0px;
}
:deep(.vc-weeks) {
  padding: 0px;
  margin-top: 48px;
  padding-left: 4px;
  .vc-weekday {
    color: #bbb;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    padding-right: 3px;
  }
}
.container {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  .date-pick {
    width: 200px;
    height: 50px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding-left: 12px;
    cursor: pointer;
    .span-date {
      font-weight: 400;
      font-size: 16px;
      margin-left: 7px;
    }
  }
  .popup-calendar {
    display: flex;
    position: fixed;
    z-index: 100;

    .header-calendar {
      display: flex;
      width: 100%;
      height: 69px;
      padding: 0 20px;
      justify-content: space-between;
      position: relative;
      align-items: center;
      border-bottom: 1px solid grey;
      .title-header {
        font: 18px;
        font-weight: 700;
        color: #000;
      }
      .icon-close {
        background: url(@/public/icon/close.svg) center;
        background-size: cover;
        height: 24px;
        width: 24px;
        cursor: pointer;
      }
    }
    .calendar {
      background: #fff;
      border-radius: 12px;
      position: absolute;
      height: fit-content;
      z-index: 9999;
      width: 370px;

      .content-calendar {
        max-width: 90%;
        width: 90%;
        margin: auto;
        padding-right: 4px;
      }
      .vc-container {
        border: none;
        height: fit-content;

        .bg-icon {
          background-color: white;
          width: 32px;
          height: 32px;
          border: 1px solid #000;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .content {
        margin-top: 26px;
        margin-bottom: 20px;
        .confirm {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .select-date-calender {
            min-width: 140px;
            display: flex;
            justify-content: space-around;
            span {
              font-size: 25px;
              font-weight: 700;
              color: gray;
            }
          }
          .btn-confirm {
            width: 170px;
            height: 68px;
            position: relative;
            z-index: 100;
            border: none;
            font-weight: 700;
            line-height: 125%;
          }
        }
        .note {
          font-size: 16px;
          color: brown;
          white-space: pre-line;
          display: flex;
          justify-content: center;
          margin-bottom: 25px;
          text-align: center;
        }
      }
    }
  }
}
</style>
