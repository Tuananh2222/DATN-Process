import { reactive } from "vue";

// import { User } from '@/utils/types/general'
import { defineStore } from "pinia";
import json from '../public/cart-item.json'

export const useCartStore = defineStore("cart", () => {
    const state = reactive({
        listFavarite: []
    });

    const initProcess = async () => {
        state.listFavarite = json
        console.log(state.listFavarite)
    }


    return { state, initProcess };
});
export default useCartStore;
