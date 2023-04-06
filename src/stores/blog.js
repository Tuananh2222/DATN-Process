import { reactive } from "vue";

// import { User } from '@/utils/types/general'
import { defineStore } from "pinia";
import json from '../public/blog.json'

export const useBlogStore = defineStore("blog", () => {
    const state = reactive({
        listBlog: [],
    });

    const initProcess = async () => {
        state.listBlog = json
    }


    return { state, initProcess };
});
export default useBlogStore;