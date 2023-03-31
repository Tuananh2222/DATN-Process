import { reactive } from "vue";
import { defineStore } from "pinia";

export const useHotelStore = defineStore("hotel", () => {
    const state = reactive({
    });
    return { state };
});