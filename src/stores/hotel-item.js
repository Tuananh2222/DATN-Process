import { reactive } from "vue";

// import { User } from '@/utils/types/general'
import { defineStore } from "pinia";
import json from '../public/hotel-item.json'

export const useHotelItemStore = defineStore("hotelItem", () => {
    const state = reactive({
        listHotelItem: []
    });

    const initProcess = async () => {
        state.listHotelItem = json
    }


    return { state, initProcess };
});