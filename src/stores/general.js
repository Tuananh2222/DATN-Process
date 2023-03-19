import { computed, reactive } from "vue";
import axios from "axios";
import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", () => {
  const state = reactive({
    revision: "",
    isLoading: false,
    isShowAuthPopup: false,
    isShowSystemErrorPopup: false,
    originLink: "",
  });

  const getOriginLink = computed(() => {
    return state.originLink;
  });

  const updateOriginLink = (link) => {
    state.originLink = link;
  };

  async function checkRevision() {
    try {
      const { data } = await axios.request({
        url: "/revision.json",
      });
      if (data && data.revisionId) {
        if (!state.revision) {
          state.revision = data.revisionId;
        } else if (state.revision !== data.revisionId) {
          location.reload();
        }
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  const actionLoading = (action) => {
    state.isLoading = action;
  };

  return {
    state,
    checkRevision,
    actionLoading,
    updateOriginLink,
    getOriginLink,
  };
});


