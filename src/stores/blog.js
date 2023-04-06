import { reactive } from "vue";

// import { User } from '@/utils/types/general'
import { defineStore } from "pinia";
import json from '../public/blog.json'

export const useBlogStore = defineStore("blog", () => {
    const state = reactive({
        listBlog: [],
        detailBlog:{}
    });

    const initProcess = async () => {
        state.listBlog = json
    }

    const getDetailBlog = (id) => {
        state.detailBlog = state.listBlog.find(item => item.id === id)
        console.log(state.detailBlog)
    }


    return { state, initProcess, getDetailBlog };
});
export default useBlogStore;