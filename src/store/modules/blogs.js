// store/modules/blogs.js
import axios from "axios";

const state = {
  blogs: [],
};

const mutations = {
  SET_BLOGS(state, blogs) {
    state.blogs = blogs;
  },
};

const actions = {
  async fetchBlogs({ commit }) {
    return await axios
      .get("http://localhost:3000/api/blogs")
      .then((response) => {
        commit("SET_BLOGS", response.data);
        console.log("res", response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the blogs:", error);
      });
  },
};

const getters = {
  allBlogs: (state) => state.blogs,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
