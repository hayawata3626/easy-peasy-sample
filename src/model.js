import { effect } from "easy-peasy";
import axios from "axios";
import _ from "lodash";

export default {
  items: [],
  loading: false,

  // actions
  search: (state, payload) => {
    state.items = [];
    if (!payload.data.items.length) return;
    state.items = _.concat(state.items, payload.data.items);
  },
  isProgress: (state, payload) => {
    state.loading = payload;
  },

  // effects
  fetched: effect(async (dispatch, payload) => {
    try {
      dispatch.isProgress(true);
      const result = await axios.get(
        `https://api.github.com/search/repositories?q=${payload}+in:name&sort=stars`
      );
      dispatch.isProgress(false);
      dispatch.search(result);
    } catch (err) {
      dispatch.isProgress(false);
    }
  })
};
