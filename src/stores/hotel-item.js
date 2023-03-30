import { reactive } from "vue";

// import { User } from '@/utils/types/general'
import { defineStore } from "pinia";
import Facilities from "@/api/Facilities";

export const useHotelItemStore = defineStore("hotelItem", () => {
    const state = reactive({
        listFacilities: [],
        
    });

    const initProcess = async () => {
        state.listFacilities = await (await Facilities.getAllFacilities()).data
    }


    return { state, initProcess };
});